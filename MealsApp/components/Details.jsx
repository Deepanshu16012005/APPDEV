import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({duration, complexity, affordability, style}) => {
    return (
        <View style={[styles.details , style]}>
            <Text>{duration}minutes</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        justifyContent:'center',
        padding:8,
        gap:10
    }
})