import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';


//Screens
import UserScreen from './screens/UserScreen';
import MainScreen from './screens/MainScreen';
import CarSearch from './screens/CarSearch';
import LoginScreen from './screens/LoginScreen';

//Screen Names

const HomeName = 'Home';
const SearchName = 'Car';
const ProfileName = 'Profile';
const LoginName = 'Login';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === SearchName) {
              iconName = focused ? 'car' : 'car-outline';

            } else if (rn === ProfileName) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === LoginName) {
                iconName = focused ? 'earth' : 'earth-outline';
              }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

<Tab.Screen name= {HomeName} component={MainScreen} />
<Tab.Screen name= {SearchName} component={CarSearch} />
<Tab.Screen name= {ProfileName} component={UserScreen} />
<Tab.Screen name= {LoginName} component={LoginScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    )
}


export default BottomTab;

