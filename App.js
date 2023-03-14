import React, {useState} from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import {ScreenType} from "./constants/constants";
import LoginScreen from "./screens/loginScreen";
import Upload from "./screens/upload";
import Header from "./components/Headers";
import Homescreen from "./screens/homescreen";
import Watch from "./screens/watch";
import BackButton from "./components/backButton";

export default function App() {
    const [screen, setScreen] = useState(ScreenType.home)
    let content;

    if (screen === ScreenType.login){
        content = <LoginScreen onLogin={(data) => {
            setScreen(data)}}/>
    } else if (screen === ScreenType.upload){
        content = <Upload />
    } else if (screen === ScreenType.watch){
        content = <Watch />
    }
    else if (screen === ScreenType.home){
        content = <Homescreen onExit={(data) => {
            setScreen(data)
        }
    } />
    }




  return (
        <View style={styles.container}>
            <Header />
            <BackButton onButtonClick={(data) => setScreen(data)}/>
            {content}
        </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

        marginTop: 80,
    },
});

