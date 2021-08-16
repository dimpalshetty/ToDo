import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export default function Header(){
    return(
        <View style={styles.header}>
          <Text style={styles.title}>To-Do List</Text>
            
        </View>
    )
};

const styles = StyleSheet.create({

    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'blue'
        

    },
    title: {
       textAlign: 'center',
       color: '#fff',
       fontSize: 18,
       paddingTop: 5,
    },

})