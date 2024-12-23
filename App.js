import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [clr, setClr] = React.useState('black');
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    const colors = Array.from({ length: 50 }, getRandomColor);
    const changeClr = () => {
        const num = Math.floor(Math.random() * colors.length);
        setClr(colors[num]);
    }
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.labels}>UserName</Text>
                <TextInput placeholder='Username' placeholderTextColor={'#fff'} style={styles.inputbox} />
                <Text style={styles.labels}>Password</Text>

                <TextInput placeholder='Password' placeholderTextColor={'#fff'} style={styles.inputbox} secureTextEntry/>
                <View style={styles.btnroom}>
                    <View style={styles.btn}><Button title='Submit'></Button></View>
                </View>
                <TouchableOpacity onPress={changeClr}>
                    <Text style={{ color: clr, textAlign: 'center', fontSize: 50 }}>Change Color</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='light' />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        paddingTop: 40,
        paddingInline: 8
    },
    labels: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        fontSize: 20,
        color: '#FAB3A9',
        marginBottom: 10
    },
    inputbox: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        color: '#14BDEB',
        fontSize: 18,
        height: 'fit-content',
        marginHorizontal: 10,
        marginVertical: 10
    },
    btnroom: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: 10,
        height: 100
    },
    btn: {
        width: 200,
    }
});
