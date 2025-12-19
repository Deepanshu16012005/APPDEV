import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from "../components/Title"
import Card from "../components/Card"
import InstructionText from "../components/InstructionText"
import Game from "../components/Game"
import { Ionicons } from "@expo/vector-icons"
import CustomButton from '../components/CustomButton'
import LogItem from "../components/LogItem";
function randomNumberGenerator(min, max, exclude) {
  if (max - min <= 1) {
    if (min === exclude) {
      return max;
    }
    return min;
  }
  const randNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randNumber === exclude) {
    return randomNumberGenerator(min, max, exclude);
  } else {
    return randNumber;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = randomNumberGenerator(1, 100, userNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  useEffect(() => {
    const userNo = Number(userNumber)
    const guessNo = Number(guessedNumber)

    console.log((guessNo) + " " + (userNo))

    if (userNo === guessNo) {
      console.log("guessed")
      onGameOver(roundsList.length);
    }
  }, [guessedNumber, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])


  function nextGuessHandler(direction) {
    if ((userNumber > guessedNumber && direction === 'lower') || (userNumber < guessedNumber && direction === 'higher')) {
      Alert.alert("Don't Lie!", "You can't play unfair", [{ text: "soory", style: 'cancel' }]);
      return;
    }
    if (direction === 'higher') {
      minBoundary = guessedNumber + 1;
    } else {
      maxBoundary = guessedNumber;
    }
    const nextGuess = randomNumberGenerator(minBoundary, maxBoundary, guessedNumber);
    console.log("nextGuess " + (nextGuess))
    setGuessedNumber(nextGuess)
    setroundsList(prevElements => [...prevElements, nextGuess]);
  }

  const [roundsList, setroundsList] = useState([initialGuess])

  return (
    <View style={styles.container}>
      <Title title="Opponents's Guess" />
      <Game>{guessedNumber}</Game>
      <Card>
        <InstructionText>Higher or Lower</InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <CustomButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name="add" size={24} color='white' />
            </CustomButton>
          </View>
          <View style={styles.btn}>
            <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color='white' />
            </CustomButton>
          </View>
        </View>
      </Card>
      {/* logs */}
      <View style={styles.listConatiner}>
        <FlatList data={roundsList}
          keyExtractor={(item) => item}
          renderItem={(itemData) => <LogItem roundNumber={itemData.index + 1} guess={itemData.item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btn: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
  },
  listConatiner: {
    flex: 1,
    padding: 16
  }
})