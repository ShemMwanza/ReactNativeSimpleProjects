import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/ui/Button'
import TextInput from '../components/ui/TextInput'
import { nameValidator } from '../helpers/nameValidator'
import { theme } from '../core/theme'
import Title from '../components/ui/Title'

export default function StartGameScreen({ onConfirmNumber }) {
    const [number, setNumber] = useState({ value: '', error: '' })

    const onConfirmPressed = () => {
        const nameError = nameValidator(number.value)
        if (nameError) {
            setNumber({ ...number, error: nameError })
            return
        }
        onConfirmNumber(number.value);
    }
    const onResetPressed = () => {
        setNumber({ value: '', error: '' })
    }

    return (
        <View style={styles.root}>
        <Title title="yes"/>
        <View style={styles.container}>
        <Text style={styles.text}>Enter a number</Text>
            <TextInput
                label="Number"
                returnKeyType="next"
                value={number.value}
                onChangeText={(text) => setNumber({ value: text, error: '' })}
                error={!!number.error}
                errorText={number.error}
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
            />
            <View style={styles.buttonsContainer}>
                <Button mode="contained" style={styles.button} onPress={onConfirmPressed}>
                    Confirm
                </Button>
                <Button mode="contained" style={[styles.button]} onPress={onResetPressed}>
                    Reset
                </Button>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
    },
    text: {
        fontSize: 36,
        color: theme.colors.white,
    },
    container: {
        padding: 16,
        marginTop: 20,
        marginHorizontal: 24,
        borderRadius: 16,
        backgroundColor: theme.colors.primary,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
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
