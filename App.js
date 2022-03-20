import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
       <Text style={styles.baseText}>
      Renti
      <Text style={styles.innerText}>Car</Text>
    </Text>
      <View>
       <Button
        title="Sign-in"
      />
       <Button
        title="Sign-up"
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcd3b6',
    alignItems: 'center',   
  },
  baseText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  innerText: {
    fontSize: 60,
    color: 'red'
  }
});

