import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './src/components/header';
import TodoItem from './src/components/todoItem';
import AddTodo from './src/components/addTodo';


export default function App(){
   const [todos, setTodos] = useState([
     {text: 'Complete work', key: 1},
     {text: 'Buy Groceries', key: 2},
     {text: 'Checkup', key: 3},
   ]);
   const pressHandler = (key) => {
     setTodos((prevTodos)=> {
       return prevTodos.filter(todo => todo.key!=key);

     })
   } 

   const submitHandler = (text)  => {
     setTodos((prevTodos) => {
       return [
         {text: text, key: Math.random().toString()},
         ...prevTodos
       ];

     })
   }

  return(
    <View style={styles.conatiner}>
    <Header></Header>

    <View style={styles.content}>
    <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item})=> (
        <TodoItem item={item} pressHandler={pressHandler}/>
        )}
      />

      </View>

    </View>

    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },

  list: {
     marginTop: 20,
  },
})