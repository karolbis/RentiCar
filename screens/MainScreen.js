import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { Button, TouchableOpacity } from 'react-native-web'
import {auth} from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTab from './BottomTab'



const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      

     
    <View>
    
      <Text style={{fontSize: 15, lineHeight: 20, position:'flex', marginTop: 30}}>
      Witaj w aplikacji RentiCar: {"\n"}
     {auth.currentUser?.email}
     
     <Button
       
      title= "Me"
      onPress={() => navigation.navigate('UserScreen')}
     
     
      />
      
     </Text>
     <Text style ={{fontSize:24, padding:10, flexDirection: 'row'}}>Proponowane:</Text>


    </View>

     
    <View style = {styles.buttonContainer}>
      
    
      
    <BottomTab/>
    </View>
  
    
    </SafeAreaView>
   
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FAEBD7'
  },
  buttonSignOut :{
    backgroundColor: 'blue',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 10,
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
} ,
leftContainer:{
  flex:1,
  backgroundColor: '#ca8afa',    
},
rightContainer:{
  flex:1,
  backgroundColor: '#96d0e3'
},

})