import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios'; // For API calls

const OfficialLeave = () => {
    const [officialLeaves, setOfficialLeaves] = useState([]);

    const fetchOfficialLeaves = async () => {
        try {
            const response = await axios.get('https://your-api.com/api/employee/official-leaves');

            if (response.data.success) {
                setOfficialLeaves(response.data.officialLeaves); // Assuming API response structure
                console.log('Official leaves fetched:', response.data);
            } else {
                alert('Failed to fetch official leaves. Please check the API response for details.');
            }
        } catch (error) {
            console.error('Error fetching official leaves:', error);
            alert('Failed to fetch official leaves. Please check your network connection and try again.');
        }
    };

    useEffect(() => {
        fetchOfficialLeaves();
    }, []);

    const renderOfficialLeave = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>Date: {item.date}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Reason: {item.reason}</Text>
        </View>
    );

    return (
        <View>
            <Text>Official Leaves</Text>
            <FlatList
                data={officialLeaves}
                keyExtractor={(item) => item.id} // Replace with unique identifier from API
                renderItem={renderOfficialLeave}
            />
            <Button title="+ Official Leave Request" onPress={() => navigation.navigate('OfficialLeaveRequest')} />
        </View>
    );
};

export default OfficialLeave;
