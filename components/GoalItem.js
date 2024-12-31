import {View, Text, StyleSheet, Pressable, } from "react-native"
function GoalItem(props){
    
    return(
        <View style={styles.goalItem}>
        <Pressable 
        android_ripple={{color:"#dddddd"}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style ={({pressed})=>pressed && styles.pressedItem}>

<Text style={styles.text}> {props.text}</Text>

</Pressable>
</View>
    )
}
const styles = StyleSheet.create({
    pressedItem:{opacity:0.1},
    goalItem:{

        
        margin:8,
        backgroundColor:"#5e0acc",
        borderRadius:10,
        
        textAlign:"auto"
        
      },
      text:{
        color:"white",
        padding:8,
        
      }
    
})
export default GoalItem