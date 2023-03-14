
import React, {useState} from 'react';
import sendFirebase from "../constants/firebaseFunctions";
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';


const upload = ({onUpload}) => {

    const [text, setText] = useState('')
    const [focus,setFocus] = useState('')
    const [date, setDate] = useState(date)

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
        const date = new Date()
        setDate(date)
        for (let i = 0; i < genres.length; i++) {
            console.log(genres.at(i))

            if(genres.at(i) == focus){
                found++
            }
        }
        if (found > 0){
            sendFirebase(date,focus,text)
            //perhaps add a picture as well
        }else{
            console.log('Genre given doesnt match any genre, or you forgot upperCase dumbass')
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.headLine}>Upload Latest News</Text>
            <Text>Current categories: News, ForFun and Gaming</Text>
            <TextInput onChangeText={changeFocus} style={styles.input} placeholder='Type Genre'/>
            <TextInput onChangeText={handleChange} style={styles.inputText} placeholder='Type Text'/>
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
    },
    inputText:{
        borderWidth: 2,
        backgroundColor: '#eee',
        height:'15%',
        width:300,
        textAlign:'center',
    }
});


