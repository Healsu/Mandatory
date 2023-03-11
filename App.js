import React, {useState} from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import {ScreenType} from "./constants/constants";
import LoginScreen from "./screens/loginScreen";
import Upload from "./screens/upload";
import Header from "./components/Headers";
import Homescreen from "./screens/homescreen";

export default function App() {
    const [screen, setScreen] = useState(ScreenType.home)
    let content;

    if (screen === ScreenType.login){
        content = <LoginScreen />
    } else if (screen === ScreenType.upload){
        content = <Upload />
    } else if (screen === ScreenType.home){
        content = <Homescreen />
    }




  return (
        <View style={styles.container}>
            <Header />
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

