import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Board from './Board'
import { mainApp } from '../style/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Game({navigation}) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function calculateWinner(squares) {
      const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
      ]
      let moves=9
      for(let i=0;i<9;i++){
          if(squares[i]) moves--
      }
      for(let i=0;i<lines.length;i++){
          const [a, b, c] = lines[i]
          if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) return squares[a];
      }
      if(moves === 0)return "tie"
      return null;
  }
  return (
    <View style={styles.container}>
      {!calculateWinner(squares) ? 
        (<View style={styles.container}>
          <Text style={styles.headingText}>Let's play Tic-Tac-Toe!</Text>
          <Board calculateWinner={calculateWinner} squares={squares} setSquares={setSquares}/>
          <Pressable
                onPress={ () => navigation.replace('Game') }
                style={styles.pressableComponent}
            >
                <Text style={styles.footerText}>Restart the game!</Text>
                <Icon name="refresh" size={35} color="#fff" />
          </Pressable>
        </View>):(
          <View>
            <Pressable
              onPress={ () => navigation.replace('Game') }
              style={styles.gameEndPressableComponent}
            >
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around',marginBottom:5}}>
                  {calculateWinner(squares) === 'tie' ?  
                    <Text style={styles.footerText}>Match Draw !</Text> : 
                      (calculateWinner(squares) === 'X' ? 
                        <Text style={styles.footerText}>'X' won the the game!</Text> : 
                          <Text style={styles.footerText}>'O' won the game!</Text>)}
                  {calculateWinner(squares) !== 'tie' && <MaterialCommunityIcons name="party-popper" size={35} color="#fff" />}
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
                  <Text style={styles.footerText}>Restart the game</Text>
                  <Icon name="navigate-next" size={35} color="#fff" />
                </View>
              </View>
            </Pressable>
          </View>
        )}
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
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 26
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
        marginBottom: 80
    },
    gameEndPressableComponent: {
        backgroundColor: 'green', 
        margin: 55, 
        height: 110, 
        width: 330, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: 13, 
        borderRadius: 12,
        marginBottom: 80
    }

})

