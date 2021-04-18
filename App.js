import React,{useState} from 'react';
import {StyleSheet, Text, View,FlatList, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';
export default function App(){
  const [todos, setTodos]= useState([
    {text:'Dance', key:'1'},
    {text:'Nutrición', key:'2'},
    {text:'Gymnasio', key:'3'},
  ]);
  /* workin with setTodos fro waching the current inside the state, this is used when we working with people or IDs*/
  /* key is for work of a way individual with all todos  */
  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      /*filter is for filter all the todos with a key, we need create a bucle*/
      return prevTodos.filter(todo=>todo.key != key);
    });
  }
 /* this function is for a button that is located in the AddTodo.js, receive a text the state and in setTodos receive a prev todos */
  const submitHandler=(text)=>{

    /* condition if the text input from the user is < to 3 characters then , this text it cant added to the todos */
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
          /* return all todos that is located in the state */
          {
            text: text, key: Math.random().toString()},
          ...prevTodos
        ]
    })
    } else{
      /* print a message how alert */
      Alert.alert('OPPS','Todos must be over 3 chars long',[
        {text:'understood', onPress:()=> console.log('alert closed')}
      ]);
    }
  }
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          /* data recibe los datos del estado */
          data={todos}
          renderItem={({item})=>(
          <TodoItem namePropExterna={item} pressHandler={pressHandler}/>
          )}          
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop:20,
  },
});

