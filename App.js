import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Game from './components/Game';
import HomeScreen from './components/HomeScreen';
import { mainApp } from './style/styles'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'HomeScreen'}}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{title: ' Play hard!'}}
        />
        {/* <Game /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
