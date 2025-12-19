import { StyleSheet,View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.Conatiner}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    Conatiner: {
    gap: 10,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#9e768aff",
    marginTop: 30,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    // android specific
    elevation: 4
  }
})