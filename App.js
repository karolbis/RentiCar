import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./navigation/screens/LoginScreen";
import MainScreen from "./navigation/screens/MainScreen";
import UserScreen from "./navigation/screens/UserScreen";
import BottomTab from "./navigation/BottomTab";
import CarSearch from "./navigation/screens/CarSearch";
import Pickedcar from "./navigation/screens/Pickedcar";




const Stack = createNativeStackNavigator();

<Stack.Navigator>
      <Stack.Screen name="Pickedcar" component={Pickedcar} />
</Stack.Navigator>

export default function App() {
  return (
    
    <BottomTab/>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   
  }
});

