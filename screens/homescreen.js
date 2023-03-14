
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScreenType} from "../constants/constants";
import React from "react";


const homescreen = ({onExit}) => {

    return (
        <View style={styles.container}>
            <Text>This is the homescreen</Text>
            <View style={styles.innerContainer}>
                <Pressable onPress={()=>onExit(ScreenType.login)}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>

            <View style={styles.innerContainer}>
                <Pressable onPress={()=>onExit(ScreenType.watch)}>
                    <Text style={styles.buttonText}>Latest News</Text>
                </Pressable>

            </View>
        </View>
    );
}


export default homescreen;
const styles = StyleSheet.create({
    container: {

        justifyContent:'space-around',
        alignItems:'center',

    },
    innerContainer: {
        backgroundColor:'#ddd',
        width: '80%',
        height: '20%',
    },
    buttonText:{
        textAlign:"center",
    }
});
