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
    const showModel = () => {
        Alert.alert('Login Details', `Username: ${name}\nPassword: ${pass}`);
    }

    return (
        <View style={styles.container}>
            {/* <Image source={{uri: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1734586577~exp=1734590177~hmac=c5eae486effe7d62e6d724daf2add5da96ea3e3864ce924a77061021bdc6dfe2&w=2000"}}
            style={{width:400, height:400}}    />
            <Image source={require("./assets/favicon.png")} style={{width:100, height:100}}/> */}
            <View style={styles.rr}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input} onChangeText={(text) => kinguu(text)} value={name}
                        placeholder="Enter your Username" placeholderTextColor="#999"
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input} onChangeText={(text) => queenuu(text)} value={pass} secureTextEntry
                        placeholder="Enter your Password" placeholderTextColor="#999"
                    />
                </View>
                <View>
                    <Button title='login' onPress={() => showModel()} />
                </View>
            </View>
            <StatusBar style="inverted" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#264653',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textrababu: {
        color: 'white',
        fontSize: 32,
    },
    rr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        color: '#bde0fe',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#1b263b',
        marginBottom: 20,
        color: '#fff'
    },
});
