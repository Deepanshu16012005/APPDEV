import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CatogoryGridTile from "../components/CatogoryGridTile"

const CategoriesScreen = () => {
  const router = useRouter()
  function renderCategoryItem(itemData) {
    function pressHandler() {
      router.push('./MealsOverview')
    }
    return (<CatogoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />)
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})