import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const CreateItems = ({ data, setdata }) => {

  const [itemName, setitemName] = useState('')
  const [stock, setstock] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemid, seteditItemid] = useState(null)
  const addItemHandler = () => {
    const newDAtaItem = {
      id: Date.now(),
      name: itemName,
      stock: stock
    }
    setdata([...data, newDAtaItem])
    setitemName('')
    setstock('')
    setisEdit(false)
  }
  const deleteItemHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }
  const editItemHandler = (item) =>{
    setisEdit(true)
    setitemName(item.name)
    seteditItemid(item.id)
  }
  const updateItemHandler = () => {
    setdata(data.map((item)=>
      item.id === editItemid ?{...item, name:itemName, stock :stock} : item
    ))

    setitemName('')
    setstock('')
    setisEdit(false)
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter item name...'
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setitemName(item)}
      />
      <TextInput
        placeholder="Enter item's stock or quantity..."
        placeholderTextColor="#999"
        keyboardType='number-pad'
        style={styles.input}
        value={stock}
        onChangeText={(item) => setstock(item)}
      />
      <View style={styles.btnWrapper}>
        <Pressable style={styles.button} onPress={() => isEdit ? updateItemHandler():addItemHandler()}>
          <Text style={styles.btnText}>{isEdit === true ? 'Edit Item':'Add Item'}</Text>
        </Pressable>
      </View>


      <View style={{ marginTop: 5, flex: 1 }}>
        <View style={styles.headcontainer}>
          <Text style={styles.subhead}>All items in the stock</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFcccc" : "#d7f6bf" }]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text style={styles.itemText}>{item.stock}{item.unit}</Text>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default CreateItems

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingVertical: "4%",
    gap: 10,

  },
  input: {
    borderWidth: 1.2,
    borderColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  btnWrapper: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#a892edff",
    // justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    width: "auto"
  },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },



  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  headcontainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  subhead: {
    fontWeight: "500",
    fontSize: 16,
  },
  itemText: {
    fontWeight: "400",
    fontSize: 14,
  }
})