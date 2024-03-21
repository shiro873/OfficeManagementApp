import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios'; // For API calls

const Overtime = () => {
    const [overtimeRequests, setOvertimeRequests] = useState([]);

    const fetchOvertimeRequests = async () => {
        try {
            const response = await axios.get('https://your-api.com/api/employee/overtime-requests');

            if (response.data.success) {
                setOvertimeRequests(response.data.overtimeRequests); // Assuming API response structure
                console.log('Overtime requests fetched:', response.data);
            } else {
                alert('Failed to fetch overtime requests. Please check the API response for details.');
            }
        } catch (error) {
            console.error('Error fetching overtime requests:', error);
            alert('Failed to fetch overtime requests. Please check your network connection and try again.');
        }
    };

    useEffect(() => {
        fetchOvertimeRequests();
    }, []);

    const renderOvertimeRequest = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>Date: {item.date}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Details: {item.details}</Text>
            <Text>Status: {item.status}</Text> // Assuming API response includes overtime request status
        </View>
    );

    return (
        <View>
            <Text>Overtime Requests</Text>
            <FlatList
                data={overtimeRequests}
                keyExtractor={(item) => item.id} // Replace with unique identifier from API
                renderItem={renderOvertimeRequest}
            />
            <Button title="+ Raise Overtime" onPress={() => navigation.navigate('RaiseOvertime')} />
        </View>
    );
};

export default Overtime;
