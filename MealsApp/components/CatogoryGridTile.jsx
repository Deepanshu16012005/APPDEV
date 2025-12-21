import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const CatogoryGridTile = ({title,color, onPress}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor:color}]}>
      <Pressable android_ripple={{color:'#ccc',foreground:true} } style={({pressed})=>[styles.btnStyle, pressed ? styles.btnPressed : null]} onPress={onPress} >
        <View style ={styles.innerContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CatogoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        backgroundColor:'white',
        borderRadius:8,
        elevation:4,
        overflow: Platform.OS === 'android'?'hidden':"visible",
    },
    btnPressed:{
        opacity:0.5
    },
    btnStyle:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
})