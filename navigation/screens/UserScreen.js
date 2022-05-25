import { StyleSheet, Text, View, TouchableOpacity, Image,} from 'react-native'
import React from 'react'
import {auth} from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'
import LoginScreen from './LoginScreen'
import { Ionicons } from 'react-native-vector-icons';



const UserScreen = () => {
  

  const handleSignOut = () => {
    auth
    .signOut()
    
    .catch(error => alert(error.message))
  }
  

  return (
    
    
    <SafeAreaView style = {styles.container}>
       
    <View style={{ alignSelf: "center" }}>
    <View style={styles.profileImg}>
  <Image source={require('./../../assets/ProfPic.jpg')} style={styles.image} resizeMode="center" ></Image>
      </View>
      </View>
    <View style = {styles.buttonContainer}>
      <Text>User: {auth.currentUser?.email}</Text>
      <TouchableOpacity
     
        onPress={handleSignOut}
        style={styles.buttonSignOut}
        >
    
          <Text style={styles.buttonSignOutText}>Sign out</Text>
      </TouchableOpacity>
      
    </View>
    </SafeAreaView>
   
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSignOut :{
    backgroundColor: 'blue',
    width: '100%',
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
    marginTop: 40,
    },
    profileImg: {
      width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: -200,
        overflow: "hidden"
    },
    titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 16
    },
    image: {
      flex: 1,
      height: undefined,
      width: undefined,
  },
})



