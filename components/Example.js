import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';

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
            {/* <ScrollView style={styles.home} 
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
            </ScrollView> */}
            {/* <LottieView source={require('../assets/paak.json')} autoPlay loop style={{width:200, height:200}}/> */}
            {/* <LottieView source={require('../assets/ding.json')} autoPlay loop style={{width:100, height:100}}/> */}
            <LottieView source={require('../assets/dong.json')} autoPlay loop style={{width:400, height:400}}/>
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