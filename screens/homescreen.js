
import {Button, StyleSheet, Text, View} from 'react-native';

const homescreen = () => {

    return (
        <View style={styles.container}>
            <Text>This is the homescreen</Text>
            <View style={styles.innerContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.buttonText}>Latest News</Text>
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
