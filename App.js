import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native'
// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import TableCode from './components/TableCode'
import { SafeAreaView } from 'react-native-safe-area-context'
import Table2 from './components/TableTask'
import LoginTask from './components/LoginTask'
import Zing from './components/Example'
import Modal from './components/modal'
import ThubTask from './components/ThubTask'
import Carosal from './components/Carosal'

export default function App() {
    const data = [
        {
            name: "athreya",
            RollNo: "22MH1A42E7",
        },
        {
            name: "Bhanu",
            RollNo: "22MH1A42I6",
        },
        {
            name: "kalebu",
            RollNo: "22MH1A42H5",
        },
        {
            name: "gopal",
            RollNo: "22MH1A4296",
        }
    ]
    return (
        <>
            {/* <Zing /> */}
            {/* <Modal /> */}
            {/* <ThubTask /> */}
            <Carosal />
        </>
    )
}

const styles = StyleSheet.create({
    status: {
        height: 40,
        backgroundColor: '#f0f0f0',
    },
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatListContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 320,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 35,
        paddingTop: 70,
        paddingInline: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    imageContainer: {
        width: 125,
        height: 125,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#007bff',
        position: 'absolute',
        top: '-60',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        width: '100%',
    },
    text: {
        fontSize: 18,
        color: '#333',
        marginBottom: 8,
        lineHeight: 24,
    },
    label: {
        fontWeight: '900',
        fontSize: 24,
        color: '#007bff',
    }, 
})