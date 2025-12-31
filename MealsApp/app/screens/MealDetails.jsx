import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const MealDetails = () => {
  const {mealName} = useLocalSearchParams()
  return (
    <>
      <Stack.Screen
        options={{
          title: `${mealName}`
        }}
      />
      <View>
        <Text>MealDetails</Text>
      </View>
    </>
  )
}

export default MealDetails

const styles = StyleSheet.create({})