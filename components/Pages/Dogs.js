import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);

  const API_URL = "https://dog.ceo/api/breed/hound/images"
  const getDogs = async () => {
    try {
      let response = await axios.get(API_URL);
      console.log(response.data.message);
      const data_dogs = await response.data.message;
      setDogs(data_dogs);
    } catch (e) {
      console.log(e.message);
    }
  };



  useEffect(() => {
    getDogs();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Dogs Galery</Text>
      </View>

     
        <FlatList
        data={dogs}
        
        keyExtractor = {
          (item, index) => index
       }
        renderItem={({ item }) => {
            return (
                <View style={styles.card}>
                  <Image
                    style={styles.feedImage}
                    source={{uri:item}}
                  />
                </View>
              );
        } }
      />
    </View>
  );
};

export default Dogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  feedImage: {
    height: 300,
    width: 300,
    borderRadius: 8,
    marginVertical: 10,
  },
});



