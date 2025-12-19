import { Alert, StyleSheet, TextInput,Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from "../components/CustomButton"
import { Link } from 'expo-router'
import InstructionText from "../components/InstructionText"
import Card from "../components/Card"
import Title from "../components/Title"

const StartGameScreen = (props) => {
  const [enterNumber, seteEnterNumber] = useState('')
  function numberInputHandler (enteredNumber){
    seteEnterNumber(enteredNumber);
  }
  function resetNumberHandler(){
    numberInputHandler('');
  }
  function confirmNumberHandler(){
    const value = parseInt(enterNumber);
    if(isNaN(value) || value <= 0 || value > 99){
      //alert
      Alert.alert("Invalid Number",
        "enter a no from 1 to 99",
        [{text:"Okay", style: 'destructive', onPress:resetNumberHandler}])
      return;
    }
    // confirm
    props.onConfirm(enterNumber);

  }
  return (
    <View style = {styles.rootCionaginer}>
    <Title title="Guess My Number"/>
    <Card>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput style={styles.noInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} value={enterNumber} onChangeText={numberInputHandler}/>
      <View style={styles.btnContainer}>
        <View style={styles.eachBtn}>
          <CustomButton onPress = {resetNumberHandler}>reset</CustomButton>
        </View>
        <View style={styles.eachBtn}>
          <CustomButton onPress = {confirmNumberHandler}>Confirm</CustomButton>
        </View>
      </View>
    </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootCionaginer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  
  eachBtn: {
    flex: 1
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10
  },
  
  noInput: {
    height: '40',
    fontSize: 30,
    lineHeight: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
    padding: 0,
    margin: 0
  }
})