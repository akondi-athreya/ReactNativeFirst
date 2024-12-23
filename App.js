import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';

export default function App() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.fontt}>Hello !</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <View style={styles.box}>
                        <Text style={styles.fontt}>{item}</Text>
                    </View>}
                    numColumns={4}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#264653',
    },
    fontt: {
        color: '#fff',
    },
    box: {
        height: 'fit-content',
        width: '20%',
        padding: 10,
        borderWidth: 2,
        borderColor: 'red',
        margin: 10,
    }
});
