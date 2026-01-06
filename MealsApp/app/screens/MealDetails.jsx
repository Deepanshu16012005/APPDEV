import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { MEALS } from '../../data/dummy-data';
import Details from '../../components/Details';
import List from '../../components/details/List';
import IconButton from '../../components/IconButton';

const MealDetails = () => {
  const { mealName, id } = useLocalSearchParams();
  const meal = MEALS.find((meal) => meal.id === id);

  function pressOnHeaderHandler(){
    console.log('pressed')
  }
  return (
    <>
      <Stack.Screen
        options={{
          title: `${mealName}`,
          headerRight:()=>{
            return <IconButton icon="star" color="white" onPress={pressOnHeaderHandler}/>
          }
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <Details duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} style={styles.Details}/>
        <Text style={styles.subhead}>Ingredients</Text>
        <List data={meal.ingredients}></List>
        <Text style={styles.subhead}>Steps</Text>
        <List data={meal.steps}></List>
      </ScrollView>
    </>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
    color: '#ffff'
  },
  subhead:{
    color:'#e2b497',
    fontSize:18,
    fontWeight:'bold',
    marginHorizontal:12,
    marginVertical:4,
    padding:6,
    textAlign:'center',
    borderBottomColor:'#e2b497',
    borderBottomWidth:2
  },
  
})