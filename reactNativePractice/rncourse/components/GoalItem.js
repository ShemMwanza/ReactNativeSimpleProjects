import { Text, View, StyleSheet, TouchableHighlight, Pressable } from 'react-native'
import React, { Component } from 'react'

export default function GoalItem(props) {
    return (
            <View style={styles.goalItems}>
            <Pressable
            android_ripple={{color: '#5bcffa'}} 
            onPress={props.deleteGoalHandler.bind(this, props.id)}
                style={(pressed) => pressed && styles.pressedItem}>
           
                <Text style={styles.goalItemsText}>{props.item.value}</Text>
            </Pressable>

            </View>
    );
}

const styles = StyleSheet.create({

    goalItems: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'blue',
        color: 'white',
        width: '100%',
    },
    goalItemsText: {
        color: 'white',
        padding: 10,

    },
    pressedItem: {
        opacity: 0.5,
    }
});
