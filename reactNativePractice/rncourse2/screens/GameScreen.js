import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../core/theme'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import Button from '../components/ui/Button';
import { Ionicons } from '@expo/vector-icons'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  let minBoundary = 1;
  let maxBoundary = 100;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Not possible", "Wrong input", [{
        text: 'Try Again',
        style: 'cancel',
      },
      ]);
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    }
    else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  function renderGuessItem(itemData) {
    return (
      <View style={styles.listItem}>
        <Text>{`Round ${guessRounds.length - itemData.index}`}</Text>
        <Text>{itemData.item}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <Button mode="contained" style={styles.button} onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='md-remove' size={24} color={theme.colors.white} />
          </Button>
          <Button mode="contained" style={[styles.button]} onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-add' size={24} color={theme.colors.white} />
          </Button>
        </View>
      </View>
      <FlatList
        data={guessRounds}
        keyExtractor={item => item.toString()}
        renderItem={renderGuessItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 24,
  },
  title: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 16,
    borderColor: theme.colors.surface,
    borderWidth: 2,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.surface
  },
  listContainer: {
    marginTop: 20,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    margin: 5,
  },
})
