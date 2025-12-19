import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
    <Text style ={[styles.title, props.style]}>{props.title}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
    fontSize:24,
    fontWeight:'bold',
    color:"#ddb52b",
    textAlign:'center',
    borderWidth:1,
    borderColor:'#ddb52b',
    padding:12,
    marginTop:30
  }
})