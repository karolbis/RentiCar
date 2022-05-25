import { StyleSheet, Text, View, StatusBar, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { Button, TouchableOpacity } from 'react-native'
import {auth} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTab from '../BottomTab'



const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
    <ImageBackground
    source={require('../../assets/carPhoto.jpg')}
    style={styles.ImgBackground}
     />
 
  <View>
  <Text style = {styles.Title}>Find your</Text>
  <Text style = {styles.Title}>Dream car</Text>
  
  </View>
    <View style = {styles.buttonSignOut}>
      <Text>Get started</Text>
    </View>
    </SafeAreaView>
   
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    
    width: "100%",
    height: "100%",
    justifyContent: 'center',
  
    backgroundColor:'white'
  },
  buttonSignOut :{
    backgroundColor: 'red',
    width: '70%',
    marginHorizontal:55,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 300,
    
    
    
  },
  buttonSignOutText: {
    color: 'white',
    fontSize:16,
    
  },
  buttonContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
    },

  inputBox: {
  width: "30%",
  height:50,
  borderWidth: 5,
  marginTop:100,
  fontSize:10
},
ImgBackground: {
  
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderBottomLeftRadius: 150,
  
},
Title: {
  fontSize:32,
  fontWeight: 'bold',
}


})