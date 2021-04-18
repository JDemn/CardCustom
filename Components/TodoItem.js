import React from 'react';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';

export default function TodoItem({namePropExterna, pressHandler}){
    /* in a PressHandler we create a anonymous function that call the pressHandler */
    return(
        <TouchableOpacity onPress={() =>pressHandler(namePropExterna.key)}>
            <Text style={styles.item}>{namePropExterna.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})