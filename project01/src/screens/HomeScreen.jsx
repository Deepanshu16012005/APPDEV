import { Pressable,StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from "./AllItems"
import CreateItems from "./CreateItems"





const HomeScreen = () => {
  const[view ,setView] = useState(0);
  const [dummyData, setdata] = useState(
  [{ id: 1, name: "Rice", stock: 120, unit: "kg" },
  { id: 2, name: "Wheat Flour", stock: 85, unit: "kg" },
  { id: 3, name: "Sugar", stock: 60, unit: "kg" },
  { id: 4, name: "Salt", stock: 40, unit: "kg" },
  { id: 5, name: "Cooking Oil", stock: 75, unit: "litre" },
  { id: 6, name: "Milk", stock: 30, unit: "litre" },
  { id: 7, name: "Tea Leaves", stock: 18, unit: "kg" },
  { id: 8, name: "Coffee Powder", stock: 12, unit: "kg" },
  { id: 9, name: "Lentils", stock: 95, unit: "kg" },
  { id: 10, name: "Spices Mix", stock: 22, unit: "kg" },]
  );
  return (
    <View style = {styles.container}>
      <Text style = {styles.dashboard}>DashBoard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button , view === 0 ? {backgroundColor:'green'} : "null"]} onPress={()=>setView(0)}>
          <Text style = {[styles.btnText, view === 0 ? {color:'white'} : "null"]}>All items</Text>
        </Pressable>
        <Pressable style={[styles.button , view === 1 ? {backgroundColor:'green'} : "null"]} onPress={()=>setView(1)}>
          <Text style = {[styles.btnText, view === 1 ? {color:'white'} : "null"]}>Low stock</Text>
        </Pressable>
        <Pressable style={[styles.button , view === 2 ? {backgroundColor:'green'} : "null"]} onPress={()=>setView(2)}>
          <Text style = {[styles.btnText, view === 2 ? {color:'white'} : "null"]}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data ={dummyData}/>} 
      {view === 1 && <AllItems data = {dummyData.filter((item)=>item.stock < 20)}/>}
      {view === 2 && <CreateItems data = {dummyData} setdata ={setdata}/>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    padding:"4%",
    backgroundColor:"#ffffff"
  },
  dashboard:{
    fontSize:24,
    fontWeight:'bold',
    color:'#333',
    
  },
  buttonContainer:{
    flexDirection:'row',
    gap:10,
    marginVertical:10
  },
  button:{
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:50,
    borderWidth:0.7,
    borderColor:"green"
    
  },
  btnText:{
    color:'green',
    fontSize:12,
  },  
})