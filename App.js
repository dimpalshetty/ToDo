import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, SectionList, Button} from 'react-native';
import Header from './src/components/header';
import TodoItem from './src/components/todoItem';
import AddTodo from './src/components/addTodo';


export default function App(){
   const [todos, setTodos] = useState([
     {text: 'Complete work', key: 1},
     {text: 'Buy Groceries', key: 2},
     {text: 'Checkup', key: 3},
   ]);

   const [name, setName] = useState('Dimpal');
  //  const renderCount = useRef(1); 
   
//  useEffect(()=> {
//    console.log("use effect ran");
//    console.log(name);
//    renderCount.current=renderCount.current+1;
//  }, [name]);

  //  const data = [
  //    {
  //      title: 'Task Description',
  //      data: ['a', 'b', 'v', 'q', 't']
  //    },
  //    {
  //     title: 'Task Description',
  //     data: ['z', 'b', 'v', 'q', 't']
  //   },
  //   {
  //     title: 'Task Description',
  //     data: ['a', 'b', 'v', 'q', 't']
  //   },
  //  ]
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
      {/* <SectionList
        keyExtractor={(items,index)=> index.toString()}
        sections={data}
        renderItem={({item})=>(
        <Text>{item}</Text>
        )}

        renderSectionHeader={({section})=> (
          <View>
          <Text>{section.title}</Text></View>
        )}

      /> */}
      <Button title="Change the name" onPress={()=>setName('shetty')}></Button>
      {/* <Text>{name} rendered this by {renderCount.current}</Text> */}
       
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