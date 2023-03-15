
import { StyleSheet, Text, View, Image } from 'react-native';
const aboutPage = () => {



    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headline}>About</Text>
                <Text style={styles.text}>The amazing app created by yours truly is made so you can upload
                news to a server and be able to receive it back with the help of a button.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.headline}>ReadME</Text>
                <Text style={styles.text}>If you want a list of the main features check the ReadME on Github
                for a full list of features and missing features</Text>
            </View>
        </View>
    );
}

export default aboutPage;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: "40%"

    },
    text:{
        fontSize: 20
    },
    headline:{
        fontSize: 40
    }
});
