import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import Details from './Details'


const MealItem = ({title, imageUrl, duration, complexity, affordability, onPress}) => {
  return (
    <View  style={styles.container}>
        <Pressable android_ripple={{color:'#ccc', foreground:true}} onPress={onPress}>
            <View>
                <Image source={{uri:imageUrl}}  style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Details duration={duration} complexity={complexity} affordability={affordability}/>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    container:{
        margin:16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor:'white',
        elevation:4
    },
    image:{
        width:'100%',
        height: 200, 
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    
})