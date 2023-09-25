import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import GameSVG from '../assets/GameSVG.js'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Tic Tac Toe</Text>
      <GameSVG height={250} width={250}/>
      <Pressable
            onPress={ () => navigation.navigate('Game') }
            style={styles.pressableComponent}
      >
        <Text style={styles.footerText}>Let's begin game!</Text>
        <Icon name="navigate-next" size={35} color="#900" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#241239',
        padding: 25,
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
    }, 
    footerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    pressableComponent: {
        backgroundColor: 'green', 
        margin: 55, 
        height: 60, 
        width: 330, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: 13, 
        borderRadius: 12,
    }
})