import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://officemanagement.pdjohn.me/api/auth/user_login', {
        email: username, // Assuming username is email for login
        password,
      });

      if (response.data.status) {
        // Successful login, navigate to Home screen
        navigation.navigate('Home');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your network connection or try again later.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
