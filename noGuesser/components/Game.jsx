import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Game = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: 24,
    marginTop:40,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#ddb52f",
    fontSize: 36,
    fontWeight: 'bold'
  }
})