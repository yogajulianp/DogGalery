import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Dogs from '../Pages/Dogs';
import JenisDog from '../Pages/SubJenisDog';
import SubJenisDog from '../Pages/SubJenisDog';


const Tab = createBottomTabNavigator();
const Drawwer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dogs Gallery" component={MyDrawwer} />
                <Stack.Screen name="Home" component={Dogs}/>
                
                <Stack.Screen name="My Journey" component={MainApp}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const MainApp =()=>(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Jenis Anjing') {
                iconName =  'book';
              } else if (route.name === 'Sub Jenis Anjing') {
                iconName =  'list';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
    
            },
            tabBarActiveTintColor: '#699BF7',
            tabBarInactiveTintColor: 'gray',
          })}
        >   
           <Tab.Screen name="Home" component={Dogs} options={{headerShown: false}}/>
           <Tab.Screen name="Jenis Anjing" component={JenisDog} options={{headerShown: false}}/>
           <Tab.Screen name="Sub Jenis Anjing" component={SubJenisDog} options={{headerShown: false}}/>
           
        </Tab.Navigator>
);

const MyDrawwer =()=>(
    <Drawwer.Navigator>
        <Drawwer.Screen name="Dogs Gallery" component={MainApp} options={{headerShown:false}}/>
        <Drawwer.Screen name="List Jenis Anjing" component={JenisDog} options={{headerShown: false}}/>
    </Drawwer.Navigator>
);
