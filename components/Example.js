import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Zing = () => {
    const [statusBarHidden, setStatusBarHidden] = useState(false);
    const [val, setVal] = useState(0);

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        if(scrollY < val) {
            setStatusBarHidden(false);
            setVal(scrollY);
            return;
        }
        if (scrollY > 0) {
            setStatusBarHidden(true);
            setVal(scrollY)
        } else {
            setStatusBarHidden(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={statusBarHidden} 
                style="light" backgroundColor='black' animated />
            <ScrollView style={styles.home} 
                onScroll={handleScroll} scrollEventThrottle={16}>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
                <Text style={styles.text}>Hello World !</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Zing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22223b',
    },
    home: {
        backgroundColor: '#22223b',
    },
    text: {
        fontSize: 24,
        marginVertical: 20,
        textAlign: 'center',
        color: 'white',
    },
});