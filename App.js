import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import CategoryScreen from './CategoryScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Subscribe from './Subscribe';
import PlayVideoScreen from './PlayVideoScreen';
import DownloadScreen from './DownloadScreen';
import EditProfileScreen from './EditProfileScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="PlayVideo" component={PlayVideoScreen}/>
        <Stack.Screen name="Download" component={DownloadScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;