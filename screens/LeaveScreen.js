// LeaveScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import axios from 'axios'; // For API calls

const Employee = () => {
  const [leaveModalVisible, setLeaveModalVisible] = useState(false);
  const [leaveDate, setLeaveDate] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveCategory, setLeaveCategory] = useState('');
  const [leaveReason, setLeaveReason] = useState('');

  const handleTakeLeave = () => {
    // Logic to send leave request to admin
    console.log("Leave Request Sent!");
    setLeaveModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Floating button to open leave request */}
      <TouchableOpacity onPress={() => setLeaveModalVisible(true)}>
        <Text style={{ fontSize: 20 }}>+</Text>
      </TouchableOpacity>

      {/* Leave Modal */}
      <Modal
        visible={leaveModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLeaveModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%' }}>
            <Text>Take Leave</Text>
            <TextInput
              placeholder="Date"
              value={leaveDate}
              onChangeText={(text) => setLeaveDate(text)}
            />
            <TextInput
              placeholder="Leave Type (Half Day/Full Day)"
              value={leaveType}
              onChangeText={(text) => setLeaveType(text)}
            />
            <TextInput
              placeholder="Leave Category"
              value={leaveCategory}
              onChangeText={(text) => setLeaveCategory(text)}
            />
            <TextInput
              placeholder="Leave Reason"
              value={leaveReason}
              onChangeText={(text) => setLeaveReason(text)}
            />
            <Button title="Take Leave" onPress={handleTakeLeave} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Admin = () => {
  const [searchText, setSearchText] = useState('');
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Function to search leave requests by date range or employee name
  const searchLeaveRequests = () => {
    // Logic to fetch leave requests based on search criteria
    console.log("Searching Leave Requests...");
  };

  // Function to approve or reject leave request
  const handleApproveReject = (status) => {
    // Logic to approve or reject leave request
    console.log(`Leave Request ${status}`);
  };

  // Function to revert approved leave request
  const handleRevertLeave = () => {
    // Logic to revert approved leave request
    console.log("Leave Reverted");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Search Input */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Search by Date Range or Employee Name"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Search" onPress={searchLeaveRequests} />

      {/* Leave Requests List */}
      <FlatList
        data={leaveRequests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <Text>{item.employeeName} - {item.date}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Approve" onPress={() => handleApproveReject('Approved')} />
              <Button title="Reject" onPress={() => handleApproveReject('Rejected')} />
              <Button title="Revert" onPress={handleRevertLeave} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const LeaveScreen = () => {
  // Logic for fetching leave data (API calls, state management, etc.)
  const [userRole, setUserRole] = useState()

  return (
    userRole === 1 ?
      <Employee /> : <Admin />
  );
};

export default LeaveScreen;
