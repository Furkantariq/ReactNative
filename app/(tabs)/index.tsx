import { View, Text, StyleSheet, FlatList,Button,  } from 'react-native'
import { useState } from 'react'
import React from 'react'
import GoalItem from "../../components/GoalItem"
import GoalInput from "../../components/GoalInput"
import{StatusBar} from "expo-status-bar"



export default function index() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endGoalHandler(){
    setModalIsVisible(false)

  }
  
  function addGoalHandler(enteredGoalText:string){
   setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
    {text : enteredGoalText, id :Math.random().toString()},])
    endGoalHandler()
  }
  function deleteGoalHandler(id:string){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goals)=>goals.id !==id)
    })

    
  }
  return (
    <>
     <StatusBar style='auto'/>
    <View style={styles.appcontainer}>
      <View style={styles.button}>
        <Button title="Add New Goal" color={"white"} onPress={startAddGoalHandler}/></View>
      
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>
      
      <FlatList data={courseGoals} renderItem={(itemData) =>{ 
       
        return <GoalItem text = {itemData.item.text}
        id={itemData.item.id}
         onDeleteItem ={deleteGoalHandler}/>

 
      }}
      keyExtractor={(item, index)=> {
        return item.id
      }}
      alwaysBounceVertical={false} style={styles.goalcontainer}/>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
  appcontainer:{
    flex:1,
    paddingTop :30,
    backgroundColor:"#311b6b",
    paddingHorizontal:30,
   
    alignItems:"center",
    
  },
 
  
  goalcontainer:{
    flex:1,
   
    
  },
  button:{
    
    backgroundColor: "#5e0acc",
    margin:20,
    borderRadius:20,
    width:"50%"
  }
 
})