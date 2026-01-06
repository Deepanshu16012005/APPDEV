import { StyleSheet, View, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../../data/dummy-data'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import MealItem from '../../components/MealItem';
const MealsOverview = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const title = CATEGORIES.find(
    (item) => item.id === id
  )?.title
  const toBeDisplayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  })

  function renderMealItem(itemData) {
    function mealPressHandler() {
      router.push({
        pathname: '/screens/MealDetails',
        params: { mealName: itemData.item.title,
                  id: itemData.item.id}
      });
    }
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration}
        complexity={itemData.item.complexity} affordability={itemData.item.affordability} onPress={mealPressHandler} />
    )
  }
  return (
    <>
      <Stack.Screen
        options={{
          title: `${title} Meals`
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={toBeDisplayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})