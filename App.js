import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import React from 'react';

export default function App() {
    const [name, setName] = React.useState('');
    const [pass, setPass] = React.useState('');
    function kinguu(val) {
        setName(val);
    }
    function queenuu(val) {
        setPass(val);
    }

    return (
        <View style={styles.container}>
            {/* <Image source={{uri: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1734586577~exp=1734590177~hmac=c5eae486effe7d62e6d724daf2add5da96ea3e3864ce924a77061021bdc6dfe2&w=2000"}}
            style={{width:400, height:400}}    />
            <Image source={require("./assets/favicon.png")} style={{width:100, height:100}}/> */}
            <View style={styles.boxx}>
                <TextInput style={{ width: 300, borderWidth: 1, borderRadius: 5 }} onChangeText={text => kinguu(text)}
                    value={name} placeholder='Username'></TextInput>
                <TextInput style={{ width: 300, borderWidth: 1, borderRadius: 5 }} onChangeText={text => queenuu(text)}
                    value={pass} placeholder='Password'></TextInput>
            </View>
            <View>
                <Button title='login' onPress={() => Alert.alert('button nokkav ra babu')}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textrababu: {
        color: '#fff',
        fontSize: 32,
    },
    boxx: {
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
});
