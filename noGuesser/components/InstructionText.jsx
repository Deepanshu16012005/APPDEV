import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstructionText = ({ children }) => {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    text: {
        color: "#d2db21ff",
        fontSize: 24,
    },
})