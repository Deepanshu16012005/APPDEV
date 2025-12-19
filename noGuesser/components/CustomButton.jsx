import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    
    return (
        <View style={styles.Outercontainer}>
            <Pressable style={styles.InnerContainer} onPress={props.onPress} android_ripple={{ color: "#644c58ff", foreground:true}}>
                <Text style={styles.btnText}>{props.children}</Text>
            </Pressable> 
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    Outercontainer: {
        overflow:'hidden',
        borderRadius: 20,
        margin: 4
    },
    InnerContainer:{
        
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation:2
    },
    btnText: {
        color: "white",
        textAlign: "center"
    }
})