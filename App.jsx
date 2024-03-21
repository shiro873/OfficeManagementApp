import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LeaveScreen from './screens/LeaveScreen';
import OfficialLeave from './screens/OfficialLeave';
import OfficialLeaveRequest from './screens/OfficialLeaveRequest';
import Overtime from './screens/Overtime';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Leave" component={LeaveScreen} />
        <Stack.Screen name="OfficialLeave" component={OfficialLeave} />
        <Stack.Screen name="Overtime" component={Overtime} />
        <Stack.Screen name="OfficialLeaveRequest" component={OfficialLeaveRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
