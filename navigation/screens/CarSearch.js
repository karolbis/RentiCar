import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text, Button, Alert, } from "react-native";
import { Ionicons } from 'react-native-vector-icons';
import { ActivityIndicator, FlatList } from "react-native-web";
import { ApiFetcher } from './../../ApiFetcher';





  

const CarSearch = () => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);

useEffect(() => {
    ApiFetcher
      .makeRequest('https://carrental-api.azurewebsites.net/car/3') // url moze byc dynamiczny ofc
      ?.then((dataFromServer) => {
        console.log({ dataFromServer });
      })
			.catch(error => {
				console.error(error);
				// show toast or something
				})
  }, []);

useEffect(() => {
  ApiFetcher
    .makeRequest('https://carrental-api.azurewebsites.net/car/3', {days: 1, pricing: 500}) // url moze byc dynamiczny ofc
    .then((response) => {
      if(response.ok) { 
        setData(json.car)
        }
    })
    .catch(error => {
      console.error(error);
      // show toast or something
      })
}, []);

  const [selectedValue, setSelectedValue] = useState("blank");
  const [selectedValue1, setSelectedValue1] = useState("blank");
  return (
    <View style={styles.container}>
     
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 150, marginRight: 150, marginTop: -50}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Pick a car" value="blank" />
        <Picker.Item label="Audi" value="Audi" />
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="Toyota" value="Toyota" />
        
      </Picker>

      
      <Picker
      
        selectedValue={selectedValue1}
        style={{ height: 100, width: 150, marginLeft: 150, marginTop:-100}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        
        <Picker.Item label="Pick a city" value="nothing" />
        <Picker.Item label="Krakow" value="Krakow" />
        <Picker.Item label="Warszawa" value="Warszawa" />
        <Picker.Item label="Wroclaw" value="Wroclaw" />
        
      </Picker>
      <View style= {styles.buttonSearch}>
      <Button
          title="Szukaj"
          onPress={() => Alert.alert('Smth')}
         
        />
        
        <Ionicons name = "search" size = {30} color = {"white"}/>
        


      </View>

      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center"
  },
  buttonSearch :{
    backgroundColor: 'black',
    width: '50%',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 110,
    
  },
  buttonSearchText : {
    color: 'white',
    fontSize:16,
  }
});

export default CarSearch 


/* Gdzies w apce FlatList by wyswietlic dane
 {isLoading ? (
      <ActivityIndicator/> 
      ) : ( 
      <FlatList
      data={data}
      
      }
      */