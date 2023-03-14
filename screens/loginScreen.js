
import {StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import {ScreenType} from "../constants/constants";
import React from "react";

const loginScreen = ({onLogin}) => {
    return (
        <View style={styles.container}>
            <Text>This is the login screen</Text>
            <View>
                <Text style={styles.inputTitle}>Username</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput style={styles.input}></TextInput>
                <Pressable onPress={()=>onLogin(ScreenType.upload)}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>


        </View>
    );
}

export default loginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderWidth: 2,
        backgroundColor: '#eee',
        height:'20%',
        width:100

    },
    inputTitle:{
        textAlign:"center"
    }
});
