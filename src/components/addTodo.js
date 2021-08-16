import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';




export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');
    // const inputRef = useRef();
    // function focus() {
    //     inputRef.current.focus()
    // }
    const changeHandler = (val) => {
         setText(val);
    }
  return (
      <View>
          <TextInput
        //   ref={inputRef}
          style={styles.input}
              placeholder= "add here "
              onChangeText={changeHandler}
          />
<Button onPress= {()=>submitHandler(text)} title="Add" color='coral' />
{/* <Button title="Direct to input" onPress={focus}/> */}
         
      </View>
  )
}

const styles = StyleSheet.create ({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        
    },
})