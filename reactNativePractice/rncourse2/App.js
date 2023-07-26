import { StyleSheet,ImageBackground,SafeAreaView, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import { theme } from './core/theme';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }  
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startGame() {
    setGameIsOver(true);
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>;
  if (userNumber){
    screen = <GameScreen onGameOver={gameOverHandler}  userNumber={userNumber}/>
  }
  if (gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber ={guessRounds} userNumber ={userNumber} onStartNewGame={startGame}/>
  }

  return (
    <LinearGradient colors={[theme.colors.surface, theme.colors.primary]}
     style={styles.container}>
     <ImageBackground source={require('./assets/background.png')} 
     resizeMode='cover'
     imageStyle={styles.ImageBackground}
     style={styles.image}>
     <SafeAreaView style={styles.container}>
      {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ImageBackground: {
      opacity: 0.5
    },
    image: {
      flex: 1,

    }
});
