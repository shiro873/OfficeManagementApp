import React, { useState } from 'react';
import { View, Text, TextInput, Button, DatePicker } from 'react-native';
import axios from 'axios'; // For API calls

const OfficialLeaveRequest = () => {
    const [date, setDate] = useState(null);
    const [type, setType] = useState('halfday'); // Default leave type (half day)
    const [category, setCategory] = useState('');
    const [reason, setReason] = useState('');

    const handleOfficialLeaveRequest = async () => {
        try {
            const response = await axios.post('https://your-api.com/api/employee/official-leaves', {
                date,
                type,
                category,
                reason,
            });

            if (response.data.success) {
                alert('Official leave request submitted successfully!');
                // Clear form fields (optional)
            } else {
                alert('Failed to submit official leave request. Please check the API response for details.');
            }
        } catch (error) {
            console.error('Error submitting official leave request:', error);
            alert('Failed to submit official leave request. Please check your network connection and try again.');
        }
    };

    return (
        <View>
            <Text>Official Leave Request</Text>
            <DatePicker value={date} onChange={setDate} />
            <Text>Type:</Text>
            <Button title="Half Day" onPress={() => setType('halfday')} />
            <Button title="Full Day" onPress={() => setType('fullday')} />
            <Text>Category:</Text>
            <TextInput value={category} onChangeText={setCategory} placeholder="Leave Category" />
            <Text>Reason:</Text>
            <TextInput value={reason} onChangeText={setReason} multiline placeholder="Cause of Leave" />
            <Button title="Take Leave" onPress={handleOfficialLeaveRequest} />
        </View>
    );
};

export default OfficialLeaveRequest;
