import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://officemanagement.pdjohn.me/api/auth/user_registration', {
        email: username, // Assuming username is email for registration
        password,
        name: username,
        role_id: 2
      });

      if (response.data.status) {
        // Successful registration, navigate to Home screen
        navigation.navigate('Home');
      } else {
        alert('Registration failed. Please try again or check your input.'); // Provide a more descriptive error message if possible
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please check your network connection or try again later.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Register</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username (Email)"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
