import React from 'react'
import { StyleSheet, Text, View } from 'react-native-web';
import UserScreen from './UserScreen';
import MainScreen from './MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name= "Home" component={UserScreen} />
            <Tab.Screen name= "Car" component={MainScreen} />
            <Tab.Screen name= "Profile" component={MainScreen} />
            
        </Tab.Navigator>
    );
};

export default BottomTab;

