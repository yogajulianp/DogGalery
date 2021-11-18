import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

const Dogs = () => {
    const [dogs, setDogs] = useState([])

    const getDogs = async () => {
        try {
            let response = await axios.get('https://dog.ceo/api/breed/hound/images')
            console.log(response.data);
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(()=> {
        getDogs();
    }, )

    return (
        <View style={styles.container}>
            <View style={style.card}>
                <Image
                style={styles.feedImage}
                source={{
                    uri: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg'
                }}
                />

            </View>


            <Text>Gallery Dogs</Text>
            <Text>Gambar</Text>

          
        </View>
    )
}

export default Dogs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    feedImage: {
        height: 300,
        borderRadius: 8,
        marginVertical: 15,
    }
})
