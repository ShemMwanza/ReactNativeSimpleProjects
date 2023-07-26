import React, { useState } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../../core/theme'

export default function Button({ mode, style, ...props }) {
  const [pressed, setPressed] = useState(false)

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={({ pressed }) => [
        styles.button,
        mode === 'outlined' && styles.outlined,
        style,
        { opacity: pressed ? 0.7 : 1 } // Apply opacity based on pressed state
      ]}
    >
      <PaperButton
        labelStyle={styles.text}
        mode={mode}
        {...props}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  outlined: {
    backgroundColor: theme.colors.surface,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
