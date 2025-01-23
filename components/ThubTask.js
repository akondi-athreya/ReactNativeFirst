import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/banner.jpeg'
import Icon1 from 'react-native-vector-icons/AntDesign';

const ThubTask = () => {
    const [showMore, setShowMore] = React.useState(false);
    // take some dummmy data with name and icon name
    // create a flatlist with the data of 12 items
    const dummydata = [
        {
            name: "calculator",
            icon: "calculator"
        },
        {
            name: "chrome",
            icon: "chrome"
        },
        {
            name: "github",
            icon: "github"
        },
        {
            name: "iconfontdesktop",
            icon: "iconfontdesktop"
        },
        {
            name: "codesquare",
            icon: "codesquare"
        },
        {
            name: "plussquare",
            icon: "plussquare"
        },
        {
            name: "minussquare",
            icon: "minussquare"
        },
        {
            name: "closesquare",
            icon: "closesquare"
        },
        {
            name: "folder1",
            icon: "folder1"
        },
        {
            name: "dingding",
            icon: "dingding"
        },
        {
            name: "database",
            icon: "database"
        },
        {
            name: "carryout",
            icon: "carryout"
        },
    ]
    return (
        <SafeAreaView>
            <View style={mystyles.heading}>
                <View style={mystyles.title}>
                    <Text style={mystyles.thub}>TECHNICAL <Text style={{ color: "#ffd500" }}>HUB</Text></Text>
                </View>
                <View style={mystyles.titleicon}>
                    <Icon name="notifications" size={25} color="#29874F" />
                </View>
            </View>
            <Divider horizontalInset={10} />
            <View style={{ width: "100%", marginTop: 15, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, color: "#29874F", fontWeight: "600" }}>Welcome, Athreya</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <View style={mystyles.Banner}>
                    <Image source={logo} style={{ width: "100%", height: "100%", borderRadius: 10 }} />
                </View>
            </View>
            <View style={mystyles.cataLine}>
                <Text style={{ fontSize: 22, color: "#fe7f2d", fontWeight: "900" }}>Categoties</Text>
                <View>
                    {showMore ? <Button mode="contained-tonal" textColor='#29874F' icon="chevron-down" onPress={() => setShowMore(!showMore)}>More</Button>
                        : <Button mode="contained-tonal" textColor='#29874F' icon="chevron-up" onPress={() => setShowMore(!showMore)}>Less</Button>
                    }
                </View>
            </View>
            <Divider horizontalInset={10} />
            <View style={mystyles.iconContainer}>
                {
                    dummydata.map((item, index) => {
                        return (
                            <View key={index} style={mystyles.iconWrapper}>
                                <View style={mystyles.iconBackground}>
                                    <Icon1 name={item.icon} size={30} color="#29874F" />
                                </View>
                                <Text style={mystyles.iconText}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    )
}

const mystyles = StyleSheet.create({
    heading: {
        width: "100%",
        height: 70,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    titleicon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 10,
        top: 25
    },
    thub: {
        fontSize: 26,
        fontWeight: "900",
        color: "#29874F"
    },
    Banner: {
        width: "95%",
        height: 160,
        marginVertical: 20
    },
    cataLine: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        paddingInline: 20,
        marginBottom: 10
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },
    iconWrapper: {
        width: "22%",
        alignItems: "center",
        marginBottom: 20,
    },
    iconBackground: {
        width: 60,
        height: 60,
        backgroundColor: "#ffffda",
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    iconText: {
        textAlign: "center",
        fontSize: 12,
        marginTop: 8,
    }
})

export default ThubTask