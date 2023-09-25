import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { boardStyle } from '../style/styles'
import Square from './Square';
import HomeScreen from './HomeScreen';
export default function Board({ calculateWinner, squares, setSquares }) {
    const [xIsNext, setXIsNext] = useState(true)
    const handleClick = (i) => {  
        if(squares[i] || calculateWinner(squares))return 
        const newSquares = squares.slice()
        newSquares[i] = xIsNext ? 'X' : 'O'
        xIsNext ? setXIsNext(false) : setXIsNext(true)
        setSquares(newSquares)
    }
  return (
    <View>
        {calculateWinner(squares) === null &&
            <View style={boardStyle.board}>
                <View style={boardStyle.row}>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </View>
                <View style={boardStyle.row}>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </View>
                <View style={boardStyle.row}>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </View>
            </View>}  
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
    // headingText: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    // }, 
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