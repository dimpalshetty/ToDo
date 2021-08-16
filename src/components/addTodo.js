import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';




export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
         setText(val);
    }
  return (
      <View>
          <TextInput
          style={styles.input}
              placeholder= "add here "
              onChangeText={changeHandler}
          />
<Button onPress= {()=>submitHandler(text)} title="Add" color='coral' />
         
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