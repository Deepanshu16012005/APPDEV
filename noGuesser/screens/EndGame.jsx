import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton';
const EndGame = ({result,startNewGame,rounds}) => {
  return (
    <View style={styles.rootConatiner}>
      <Title title="GAME OVER!"></Title>
      <View style={styles.ImageConatiner}>
        <Image style={styles.Image} source={require("../assets/images/images/success.png")}/>
      </View>
      <Text style={styles.summaryText}>
        Your Phone Needed <Text style={styles.Highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.Highlight}>{result}</Text>.
      </Text>
      <CustomButton onPress={startNewGame}>Start a new Game</CustomButton>
    </View>
  )
}

export default EndGame

const styles = StyleSheet.create({
  rootConatiner:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  ImageConatiner:{
    marginTop:20,
    overflow:"hidden",
    borderRadius:150,
    width:300,
    height:300,
    borderWidth:3,
    borderColor:"black",
    
  },
  Image:{
    width:"100%",
    height:"100%"
  },
  summaryText:{
    fontFamily:'regular',
    fontSize:24,
    textAlign:'center',
    marginVertical:24
  },
  Highlight:{
    fontFamily:'bold',
    color:"#b5be3fff"
  }
})