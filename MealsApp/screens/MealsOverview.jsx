import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MEALS} from '../data/dummy-data'
const MealsOverview = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview</Text>
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  }
})