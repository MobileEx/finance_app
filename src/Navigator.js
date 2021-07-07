import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from './screens/auth/Signin';
import SignupScreen from './screens/auth/Signup';
import ResetPwdScreen from './screens/auth/ResetPwd';

import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';
import EnvelopScreen from './screens/Envelop';
import AddEditEnvelopScreen from './screens/AddEditEnvelop';
import ReportScreen from './screens/Report';
import SettingScreen from './screens/Setting';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      headerMode='none'
      initialRouteName='Signin'
    >
      <Stack.Screen
        name='Signin'
        component={SigninScreen}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
      />
      <Stack.Screen
        name='ResetPwd'
        component={ResetPwdScreen}
      />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Envelop' component={EnvelopScreen} />
        <Stack.Screen name='AddEditEnvelop' component={AddEditEnvelopScreen} />
        <Stack.Screen name='Report' component={ReportScreen} />
        <Stack.Screen name='Setting' component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;