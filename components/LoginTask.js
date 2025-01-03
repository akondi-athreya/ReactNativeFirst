import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../assets/landing_home_new.png'

export default function LoginTask() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.Landing_top}>
                    <Image source={logo} style={styles.image_} />
                </View>
                <View style={styles.Landing_bottom}>
                    <Text style={styles.text_heading}>Hello</Text>
                    <Text style={styles.text_matter}>Welcome To Lorem ipsum odor amet, consectetuer adipiscing elit.</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.loginbtn}>
                            <Text style={styles.text_btn}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signupbtn}>
                            <Text style={styles.text_btn2}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#FFF7EE"
    },
    Landing_top: {
        height: "50%",
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    Landing_bottom: {
        height: "35%",
        width: "100%",
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text_heading: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 900,
    },
    image_: {
        width: "90%",
        height: "90%"
    },
    text_matter: {
        fontSize: 16,
        fontWeight: 300,
        textAlign: 'center',
        width: "70%"
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 30,
        width: '80%',
        marginTop: 20,
    },
    loginbtn: {
        backgroundColor: '#0F8B8D',
        padding: 10,
        borderRadius: 50,
        width: '45%',
        alignItems: 'center',
    },
    signupbtn: {
        backgroundColor: '#fff',
        padding: 10,
        width: '45%',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#0F8B8D',
        borderWidth: 2
    },
    text_btn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text_btn2: {
        color: '#0F8B8D',
        fontSize: 16,
        fontWeight: 'bold',
    },
})