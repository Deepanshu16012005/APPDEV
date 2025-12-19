import {FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
        <View style = {styles.headcontainer}>
            <Text style={styles.subhead}>Items</Text>
            <Text style={styles.subhead}>Quantity</Text>
        </View>
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View style={[styles.itemContainer, {backgroundColor :item.stock < 20? "#FFcccc" : "#d7f6bf"}]}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.stock}{item.unit}</Text>
                </View>
            )}
            contentContainerStyle ={{gap:10}}
            showsVerticalScrollIndicator = {false}
        />
    </View>
  )
}
export default AllItems

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10    
    },
    headcontainer:{
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    subhead:{
        fontWeight:"500",
        fontSize:16,
    },
    itemText:{
        fontWeight:"400",
        fontSize:14,
    }
})