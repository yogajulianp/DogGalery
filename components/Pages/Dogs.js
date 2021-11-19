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

  const API_URL = "https://dog.ceo/api/breed/hound/images/random/10"
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

  // const [items, setItems]=useState([]);

  // const GetData=()=> {
  //     axios.get('https://dog.ceo/api/breed/hound/images
  //     ')
  //     .then(res=>{
  //         const data1=(res.data.data)
  //         console.log('res: ', data1)
  //         setItems(data1)
  //     })
  // }

  useEffect(() => {
    getDogs();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.header}>
        <Text>Home</Text>
      </View>
      {/* <View style={styles.card}>
        <Image
          style={styles.feedImage}
          source={{
            uri: feed_image,
          }}
        />
      </View> */}

      

      <Text>Gallery Dogs</Text>
      <Text>Gambar</Text>

      <FlatList
        data={dogs}
        keyExtractor={(item) => `key-${item.index}`}
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



