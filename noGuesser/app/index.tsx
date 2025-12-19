import { StyleSheet, ImageBackground} from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import EndGame from "../screens/EndGame"
import GameScreen from "../screens/GameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { SetStateAction, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font'
export default function Index() {
  SplashScreen.preventAutoHideAsync();
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setgameOver] = useState(true)
  const [guessRounds, setguessRounds] = useState(0)
  const [fontLoaded] = useFonts({
    'regular':require('../assets/images/fonts/OpenSans-Regular.ttf'),
    'bold': require('../assets/images/fonts/OpenSans-Bold.ttf')
  })
  useEffect(() => {
    if(fontLoaded){
      console.log("fonts Loaded")
      SplashScreen.hideAsync();
    }
  }, [fontLoaded])
  
  function startNew(){
    console.log("function called")
    setguessRounds(0);
    setUserNumber(undefined);
  }
  function validPickedNumber(number: SetStateAction<undefined>){
    setUserNumber(number)
    setgameOver(false);
  }
  function gameOverHandler(noOfRounds: SetStateAction<number>){
    setguessRounds(noOfRounds)
    setgameOver(true)
  }
  let screen = <StartGameScreen onConfirm = {validPickedNumber}/>
  if(userNumber){
    screen = <GameScreen userNumber = {userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameOver && userNumber){
    screen = <EndGame result ={userNumber} startNewGame={startNew} rounds={guessRounds}/>
  }
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require("../assets/images/images/image.png")} resizeMode="cover" style={styles.rootScreen}
       imageStyle={styles.imageBackground}>
        <SafeAreaView style = {styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  imageBackground:{
    opacity:0.20
  }
})
