import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?t=st=1734586577~exp=1734590177~hmac=c5eae486effe7d62e6d724daf2add5da96ea3e3864ce924a77061021bdc6dfe2&w=2000"}}
            style={{width:400, height:400}}    />
            <Image source={require("./assets/favicon.png")} style={{width:100, height:100}}/>
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
    }
});
