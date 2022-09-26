import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Main from '../../src/screens/Main';
import CreateNote from '../screens/CreateNote';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgetPassword from '../screens/ForgetPassword'


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          options={{ headerShown: false}}
          name="Splash" component={Splash} />
          <Stack.Screen 
          options={{ headerShown: false}}
          name = "Login" component={Login} />
          <Stack.Screen 
          options={{ headerShown: false}}
          name = "Signup" component={Signup} />
          <Stack.Screen 
          options={{ headerShown: false}}
          name = "ForgetPassword" component={ForgetPassword} />
        <Stack.Screen  
        name = "Main" component={Main} />
        <Stack.Screen  
        name = "CreateNote" component={CreateNote} />
        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;