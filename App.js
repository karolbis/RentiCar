import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";




const Stack = createNativeStackNavigator();



export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   
  }
});

