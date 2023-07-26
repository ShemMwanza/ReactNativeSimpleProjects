import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../core/theme'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: theme.colors.accent,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: theme.colors.accent,
        fontWeight: 'bold',
        fontSize: 36,
    }
})