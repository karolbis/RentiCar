import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import {auth} from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'



const MainScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
    navigation.replace("LoginScreen")
    //navigation.replace("Home")
    })
    .catch(error => alert(error.message))
  }

  return (
    
      
    <SafeAreaView style = {styles.container}>
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

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    marginTop: 40,
    }
})