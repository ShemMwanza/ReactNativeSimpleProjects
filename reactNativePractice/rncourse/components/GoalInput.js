import { View, Text, StyleSheet, TextInput, Image, TouchableHighlight, Modal } from 'react-native'
import React, { useState } from 'react'
export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
    }
    function endModalGoal() {
        props.endModalGoal();
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.flexStyle}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your course goal' />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button} onPress={addGoalHandler}>
                        <Text style={styles.buttonText}>Add Goal</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={endModalGoal}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({

    flexStyle: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 50,
        justifyContent: 'center',
        backgroundColor: '#5bceee'

    },
    textInput: {
        width: '90%',
        height: 50,
        marginEnd: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 4,
        paddingHorizontal: 4,
    },
    image: {
        width: 100,
        height: 100,
    },
    buttonContainer: {
        marginVertical: 10,
        backgroundColor: '#000000',
        borderRadius: 4,
        width: '90%',
        flex: 1,
        height: '20%',
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
    },
});