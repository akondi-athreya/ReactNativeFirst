import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function App() {
    return (
        <>
            <View style={styles.status}></View>
            <View style={styles.container}>
                <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: "https://info.aec.edu.in/adityacentral/studentphotos/22MH1A42H5.jpg" }}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}><Text style={styles.label}>Name:</Text> Kalebu</Text>
                            <Text style={styles.text}><Text style={styles.label}>Roll No:</Text> 22MH1A42H5</Text>
                            <Text style={styles.text}><Text style={styles.label}>Branch:</Text> Artificial Intelligence & Machine Learning</Text>
                            <Text style={styles.text}><Text style={styles.label}>College:</Text> Aditya College of Engineering & Technology</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: "https://info.aec.edu.in/adityacentral/studentphotos/22MH1A42H5.jpg" }}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}><Text style={styles.label}>Name:</Text> Kalebu</Text>
                            <Text style={styles.text}><Text style={styles.label}>Roll No:</Text> 22MH1A42H5</Text>
                            <Text style={styles.text}><Text style={styles.label}>Branch:</Text> Artificial Intelligence & Machine Learning</Text>
                            <Text style={styles.text}><Text style={styles.label}>College:</Text> Aditya College of Engineering & Technology</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: "https://info.aec.edu.in/adityacentral/studentphotos/22MH1A42H5.jpg" }}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}><Text style={styles.label}>Name:</Text> Kalebu</Text>
                            <Text style={styles.text}><Text style={styles.label}>Roll No:</Text> 22MH1A42H5</Text>
                            <Text style={styles.text}><Text style={styles.label}>Branch:</Text> Artificial Intelligence & Machine Learning</Text>
                            <Text style={styles.text}><Text style={styles.label}>College:</Text> Aditya College of Engineering & Technology</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: "https://info.aec.edu.in/adityacentral/studentphotos/22MH1A42H5.jpg" }}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}><Text style={styles.label}>Name:</Text> Kalebu</Text>
                            <Text style={styles.text}><Text style={styles.label}>Roll No:</Text> 22MH1A42H5</Text>
                            <Text style={styles.text}><Text style={styles.label}>Branch:</Text> Artificial Intelligence & Machine Learning</Text>
                            <Text style={styles.text}><Text style={styles.label}>College:</Text> Aditya College of Engineering & Technology</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <StatusBar style='auto' />
        </>
    )
}

const styles = StyleSheet.create({
    status: {
        height: 40,
        backgroundColor: '#f0f0f0',
    },
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        width: 320,
        height: 350,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    imageContainer: {
        width: 125,
        height: 125,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#007bff',
        position: 'absolute',
        top: '-60',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        width: '100%',
    },
    text: {
        fontSize: 18,
        color: '#333',
        marginBottom: 8,
        lineHeight: 24,
    },
    label: {
        fontWeight: '900',
        fontSize: 24,
        color: '#007bff',
    },
})