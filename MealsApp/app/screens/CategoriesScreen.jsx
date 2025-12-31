import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import CatogoryGridTile from "../../components/CatogoryGridTile"

const CategoriesScreen = () => {
  const router = useRouter()
  function renderCategoryItem(itemData) {
    function pressHandler() {
      router.push({
        pathname: '/screens/MealsOverview',
        params: { id: itemData.item.id }
      });
    }
    return (<CatogoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />)
  }
  return (
    <>
    <Stack.Screen 
      options={{title:'Categories'}}
    />
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      />
    </>
  )
}

export default CategoriesScreen
