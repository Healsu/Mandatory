
import React, {useState} from 'react';

import {Button, Text, TextInput, View, StyleSheet} from 'react-native';


const upload = () => {

    const [text, setText] = useState('')
    const [focus,setFocus] = useState('')
    const genres = ['ForFun','News','Gaming']

    const handleChange = (val) => {
            setText(val)
            console.log("Current Text: " + val)

    }
    const changeFocus = (val) => {
        setFocus(val)
        console.log(val)
    }

    const sendData = () =>{
        let found = 0
        for (let i = 0; i < genres.length; i++) {
            if(text == genres.at(i)){
                found++
            }
        }
        if (found > 0){

        }else{
            console.log('Genre given doenst match any genre')
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.headLine}>Upload Latest News</Text>
            <Text>Current categories: News, ForFun and Gaming</Text>
            <TextInput onChangeText={changeFocus} style={styles.input} placeholder='Type Genre'/>
            <TextInput onChangeText={handleChange} style={styles.input} placeholder='Type Text'/>
            <Button title={'Send'} onPress={sendData} />
        </View>
    );
}

export default upload;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      
    },
    input:{
        borderWidth: 2,
        backgroundColor: '#eee',
        height:'10%',
        width:100,
        textAlign:'center',
    },
    headLine:{
        fontSize: 40,
    }
});


