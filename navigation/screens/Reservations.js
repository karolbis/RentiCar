import { StyleSheet, Text, View, StatusBar, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { Button, TouchableOpacity } from 'react-native'
import {auth} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import CarSearch from './CarSearch'



const Reservations = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
    
 
  <View>
  <Text style = {styles.Title}>My reservations:</Text>
  
  </View>
    </SafeAreaView>
   
  )
}

export default Reservations

const styles = StyleSheet.create({
  container: {
    
    width: "100%",
    height: "100%",
    
  },

Title: {
  fontSize:24,
  fontWeight: 'bold',
  
}


})