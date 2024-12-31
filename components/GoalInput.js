import {View, TextInput,StyleSheet, Button,Modal, Image} from "react-native"
import { useState } from "react"
function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function goalInputhandler(enteredText){
        setEnteredGoalText(enteredText)

}
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        
    }
      
    return(
      <Modal visible={props.visible} animationType="slide">
    <View style={styles.addgoal}>
      <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput style={styles.text} placeholder='Enter your Goals!'
         onChangeText={goalInputhandler}
         value={enteredGoalText}/> 
         <View style={styles.buttonConatiner}>
         <View style={styles.button}>
         <Button title=" Add Goal" onPress={addGoalHandler} color={"white"}/>
         </View>
         <View style={styles.button}>
         <Button title="Cancel" color={"white"} onPress={props.onCancel}/>
         </View>
        
        
        </View>
        
      </View>
      </Modal>)
}
const styles = StyleSheet.create({
    text:{
        
        borderWidth:1,
        borderColor:"#cccccc",
        width:"80%",
        padding:10,
        marginRight:5,
        borderRadius:10,
        color:"white"
        
      }, addgoal:{
    
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
      
       
        borderColor:"grey",
        paddingBottom:20,
        alignItems:"center",
        backgroundColor:'#311b6b'
        
        
        
        
      },
      buttonConatiner:{
        flexDirection:"row"

      },
      button:{
        backgroundColor: "#5e0acc",
        margin:20,
        borderRadius:20,
        width:"30%"
      },
      image:{
        width:"50%",
        height:"25%"
      }
      

})
export default GoalInput