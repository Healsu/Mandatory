import {collection, addDoc, query, onSnapshot} from 'firebase/firestore'
import {database} from "../firebase";
import {Text, View} from "react-native";


let chatColl = '';

const sendFirebase = function(date,genre,text){

    chatColl = genre;
    sendData(date,text)
}

async function sendData(date, text){
    await addDoc(collection(database,chatColl),{
        date: date.toLocaleDateString("en-US"),
        text: text
    })



}

export default sendFirebase;