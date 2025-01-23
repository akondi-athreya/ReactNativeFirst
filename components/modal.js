import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { StyleSheet } from 'react-native'

const Modal = () => {
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }
    return (
        <SafeAreaView style={mystyles.container}>
            <View style={mystyles.centeredView}>
                <Button
                    mode="contained-tonal"
                    icon="home"
                    onPress={() => showToast()}
                >Click me</Button>
            </View>
            <Toast />
        </SafeAreaView>
    )
}

const mystyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})

export default Modal