
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {collection, onSnapshot, query} from "firebase/firestore";
import {database} from "../firebase";
import {useState} from "react";
import ListItem from "../constants/ListItem";

let fireNotes = '';
let fireNoteRef;

const watch = ({notes}) => {
const [callNote, setNote] = useState()

    const getGaming = () =>{
        fireNotes = 'Gaming'
        fireNoteRef = collection(database,fireNotes)
        read()
    }

    const getForFun = () =>{
        fireNotes = 'ForFun'
        fireNoteRef = collection(database,fireNotes)
        read()
    }
    const getNews = () =>{
        fireNotes = 'News'
        fireNoteRef = collection(database,fireNotes)
        read()
    }

    const read = () =>{

        console.log("Reading Firebase")
        const q = query(fireNoteRef, ref => ref.orderBy('createdAt', 'desc'));
        const snapArrya = [];
        onSnapshot(q, snapshot => {
            snapshot.forEach(snap => {
                snapArrya.push({
                    ...snap.data(),
                    key: snap.id
                });
            });
        setNote(snapArrya)
    })
}

const renderItem = (itemData) =>{
    return <ListItem note={itemData.item.note} />
}

    return (
        <View style={styles.buttons}>
            <Text>Diffrent News</Text>
            <Button title="Gaming" onPress={getGaming}/>
            <Button title="ForFun" onPress={getForFun}/>
            <Button title="News" onPress={getNews}/>
        <View style={styles.container}>
            <FlatList data={callNote} renderItem={renderItem} />
        </View>
        </View>

    );
}

export default watch;
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        height: "50%"
    },
    buttons:{

    }
});
