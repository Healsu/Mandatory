
import { StyleSheet, Text, View } from 'react-native';

const aboutPage = () => {
    return (
        <View style={styles.container}>
            <Text>This is the about page</Text>

        </View>
    );
}

export default aboutPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
