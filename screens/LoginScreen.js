import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web'
import { auth } from '../firebase'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
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
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView></>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
inputContainer: {

},
input: {

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

},
buttonText: {
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 24,
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
