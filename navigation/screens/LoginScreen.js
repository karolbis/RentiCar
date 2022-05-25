import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/core'



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const navigation = useNavigation()

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
   navigation.navigate("Home")
        }
    })
        return unsubscribe
    }, [])


   const handleSignUp = () => {
       auth
       .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
         .then(userCredentials => {
             const user = userCredentials.user;
             console.log('Logged in with', user.email);
         })
         .catch(error => alert(error.message))
     }

    return (

        <><SafeAreaView style={styles.container}>
            <Text style={styles.baseText}>
                Renti
                <Text style={styles.innerText}>Car</Text>
            
           
    
              
              
            </Text>

        </SafeAreaView>
        
        <KeyboardAvoidingView
            style={styles.container}
            behaviour="padding"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="E-mail"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input} />
                    <TextInput

                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry={true} />
                </View>
                </TouchableWithoutFeedback>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={[styles.buttonOutlineText , styles.buttonText]}>Register</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
            </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

},
carContainer: {
width: "100%",
height: "100%"
},

input: {
    width: "100%",
    padding: 8,
    borderColor: 'black',
    borderLeftWidth: 2,
    borderTopWidth:2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    
},

baseText: {
    fontSize: 60,
    fontWeight: 'bold',
  },

innerText: {
    fontSize: 60,
    color: 'red'
  },
buttonContainer: {
width: '60%',
justifyContent: 'center',
alignItems: 'center',
marginTop: 40,
},
button: {
    backgroundColor: 'red',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 10,

},
buttonText: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 40,
    color: 'white'
},

buttonOutline: {

},
buttonOutlineText: {
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 24,
}

})
