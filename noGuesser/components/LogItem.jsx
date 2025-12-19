import { StyleSheet, Text, View } from 'react-native'

const LogItem = ({roundNumber,guess}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent&apos;s Guess: {guess}</Text>
    </View>
  )
}

export default LogItem

const styles = StyleSheet.create({
    item:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#dcb207ff',
        justifyContent:'space-between',
        flexDirection:'row',
        width:"100%",
        elevation:4,

    },
    text:{
        fontFamily:'regular',

    }
})