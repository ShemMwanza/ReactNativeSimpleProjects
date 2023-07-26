import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import { theme } from '../core/theme'
import Button from '../components/ui/Button'

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Title title='GAME OVER!' />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
         source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>Your phone needed 
      <Text style={styles.highlight}>{roundsNumber}</Text> 
      rounds to guess the number {' '} 
      <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <Button onPress={onStartNewGame}>Restart</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginHorizontal: 24,
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    
  },
  highlight: {
    color: theme.colors.surface
  }
})