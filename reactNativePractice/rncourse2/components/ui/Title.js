import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'

export default function Title(props) {
  return (
    <View>
          <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

    title: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 16,
        borderColor: theme.colors.accent,
        borderWidth: 2,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.accent
    },

})
