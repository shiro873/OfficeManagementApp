import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios'; // For API calls

const EmployeeHome = ({ navigation }) => {
    const [entryTime, setEntryTime] = useState(null);
    const [exitTime, setExitTime] = useState(null);
    const [reviewMessage, setReviewMessage] = useState('');

    const handleEntryTime = async () => {
        try {
            const response = await axios.post('https://officemanagement.pdjohn.me/api/user/user_entry_time', {
                // Include any required data in the request body as per the API documentation
            });

            if (response.data.success) { // Assuming the API response indicates success
                const currentTime = new Date().toISOString();
                setEntryTime(currentTime);
                console.log('Entry time recorded:', currentTime);
            } else {
                alert('Failed to record entry time. Please check the API response for details.');
            }
        } catch (error) {
            console.error('Error recording entry time:', error);
            alert('Failed to record entry time. Please check your network connection and try again.');
        }
    };

    const handleExitTime = async () => {
        try {
            const response = await axios.post('https://officemanagement.pdjohn.me/api/user/user_entry_time', {
                // Include any required data in the request body as per the API documentation
            });

            if (response.data.success) { // Assuming the API response indicates success
                const currentTime = new Date().toISOString();
                setExitTime(currentTime);
                console.log('Exit time recorded:', currentTime);
            } else {
                alert('Failed to record exit time. Please check the API response for details.');
            }
        } catch (error) {
            console.error('Error recording exit time:', error);
            alert('Failed to record exit time. Please check your network connection and try again.');
        }
    };

    const handleReviewRequest = async () => {
        try {
            const response = await axios.post('https://officemanagement.pdjohn.me/api/user/user_time_check', {
                // Include any required data in the request body as per the API documentation, e.g., message
            });

            if (response.data.success) { // Assuming the API response indicates success
                alert('Review request sent to admin. You will be notified when reviewed.');
                setReviewMessage('Review requested (pending)');
            } else {
                alert('Failed to send review request. Please check the API response for details.');
            }
        } catch (error) {
            console.error('Error sending review request:', error);
            alert('Failed to send review request. Please check your network connection and try again.');
        }
    };

    const fetchAttendanceData = async () => {
        // Consider making an API call to retrieve attendance data if needed
        // (You might have a separate API endpoint for fetching attendance)
    };

    useEffect(() => {
        fetchAttendanceData();
    }, []);

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>Welcome, Employee!</Text>
            {entryTime && exitTime && (
                <Text>Entry Time: {entryTime}</Text>
            )}
            {entryTime && !exitTime && (
                <>
                    <Text>Entry Time: {entryTime}</Text>
                    <Button title="Exit Office" onPress={handleExitTime} />
                </>
            )}
            {!entryTime && (
                <Button title="Enter Office" onPress={handleEntryTime} />
            )}
            <TextInput
                value={reviewMessage}
                onChangeText={setReviewMessage}
                editable={false}
                placeholder="Review Message (if any)"
            />
            {!entryTime && (
                <Button title="Request Review" onPress={handleReviewRequest} />
            )}
            <Button title="View Attendance" onPress={() => navigation.navigate('Attendance')} />
        </View>
    );
};

const AttendanceScreen = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [attendanceList, setAttendanceList] = useState([]); // Replace with actual data

    // Fetch attendance data (you'll need an API call here)

    const handleSearch = () => {
        // Filter attendance list based on searchQuery
        // Update state accordingly
    };

    const handleDateRangeFilter = () => {
        // Filter attendance list based on fromDate and toDate
        // Update state accordingly
    };

    const handleResetEntryTime = (employeeId) => {
        // Logic to reset entry time for a specific employee
    };

    const handleUpdateAttendance = (employeeId) => {
        // Logic to update attendance (entry/exit time) for a specific employee
    };

    const handleDeleteAttendance = (employeeId) => {
        // Logic to delete an attendance record for a specific employee
    };

    return (
        <View>
            {/* Date pickers for From date and To date */}
            <DatePicker value={fromDate} onChange={setFromDate} />
            <DatePicker value={toDate} onChange={setToDate} />

            {/* Search box */}
            <TextInput
                placeholder="Search by employee name"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <Button title="Search" onPress={handleSearch} />

            {/* Attendance list */}
            <FlatList
                data={attendanceList}
                keyExtractor={(item) => item.employeeId}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.employeeName}</Text>
                        <Text>Entry: {item.entryTime}</Text>
                        <Text>Exit: {item.exitTime}</Text>
                        {/* Add Update and Delete buttons */}
                        <Button title="Update" onPress={() => handleUpdateAttendance(item.employeeId)} />
                        <Button title="Delete" onPress={() => handleDeleteAttendance(item.employeeId)} />
                    </View>
                )}
            />
        </View>
    );
};

const isAdmin = true;

const Home = ({ navigation }) => {
    return isAdmin ? <AttendanceScreen /> : <EmployeeHome navigation={navigation} />;
};


export default Home;
