import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Carosal = () => {
    const info = [{name: 1},{name: 2},{name: 3},{name: 4},{name: 5},
        {name: 6},{name: 7},{name: 8},{name: 9},{name: 10}];

    return (
        <SafeAreaView>
            <View>
                <Text>Carosal</Text>
                <FlatList
                    data={info}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <View style={styles.card}>
                                <View style={styles.innerCard}>
                                    <Text style={styles.matter}>{item.name}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.name.toString()}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(e) => {
                        console.log(Math.round(e.nativeEvent.contentOffset.x/Dimensions.get('screen').width));
                    }}
                ></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default Carosal

const styles = StyleSheet.create({
    card: {
        height: 200,
        width: Dimensions.get('screen').width,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    matter: {
        fontSize: 70,
        color: "white"
    },
    innerCard: {
        width: "90%",
        height: "90%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        borderRadius: 15
    }
})