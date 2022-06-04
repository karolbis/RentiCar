import React, { useState, useEffect } from "react";
import {
  View,
  Picker,
  StyleSheet,
  Text,
  Button,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { apiFetcher } from "../../ApiFetcher";

const CarSearch = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data.length, { data });
  useEffect(() => {
    apiFetcher
      .makeGetRequest("https://carrentalwebapi.azurewebsites.net/car") // url moze byc dynamiczny ofc
      ?.then((dataFromServer) => {
        setData(dataFromServer);
      })
      .catch((error) => {
        console.error(error);
        // show toast or something
      });
  }, []);

  const [selectedValue, setSelectedValue] = useState("blank");
  const [selectedValue1, setSelectedValue1] = useState("blank");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 150, marginRight: 150, marginTop: -50 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Pick a car" value="blank" />
        <Picker.Item label="Audi" value="Audi" />
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="Toyota" value="Toyota" />
      </Picker>

      <Picker
        selectedValue={selectedValue1}
        style={{ height: 100, width: 150, marginLeft: 150, marginTop: -100 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="Pick a city" value="nothing" />
        <Picker.Item label="Krakow" value="Krakow" />
        <Picker.Item label="Warszawa" value="Warszawa" />
        <Picker.Item label="Wroclaw" value="Wroclaw" />
      </Picker>
      <View style={styles.buttonSearch}>
        <Button title="Szukaj" onPress={() => Alert.alert("Smth")} />

        <Ionicons name="search" size={30} color={"white"} />
      </View>
      <ScrollView>
        {data.length > 0 &&
          data.map((item) => (
            <View key={item.carId}>
              {item.photos[0]?.fileUrl && (
                <Image
                  source={{ uri: item.photos[0].fileUrl }}
                  style={{ width: 100, height: 100 }}
                />
              )}

              <Text>{item.manufacturer}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  buttonSearch: {
    backgroundColor: "black",
    width: "50%",
    height: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 110,
  },
  buttonSearchText: {
    color: "white",
    fontSize: 16,
  },
});

export default CarSearch;