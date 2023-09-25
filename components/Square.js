import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { boardStyle } from '../style/styles'

export default function Square( {value, onSquareClick} ) {
  return (
    <View>
        <Pressable
            onPress={ () => onSquareClick() }
            style={boardStyle.square}
        >
            <Text style={{ fontSize: 55, fontWeight: 'bold' }}>{value}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})