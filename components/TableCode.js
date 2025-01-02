import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Row, Rows, Table } from 'react-native-table-component'

export default function TableCode() {
    let HeaderData = ["S.no", "name", "age", 'hello', 'bye', 'hi'];
    let RowData = [
        ["1", "Athreya", "21", "sd", "sdf", "zcx"],
        ["2", "Sri Ram", "21", "sdf", "sd", "zcx"],
        ["3", "Athreya", "21", "sadf", "sdaf", "zcx"],
        ["1", "Athreya", "21", "sdaf", "sdf", "zcx"],
        ["1", "Athreya", "21", "fsduf", "dfjh", "zcx"],
        ["1", "Athreya", "21", "fsduf", "dfjh", "zcx"],
        ["1", "Athreya", "21", "fsduf", "dfjh", "zcx"],
        ["1", "Athreya", "21", "fsduf", "dfjh", "zcx"],
        ["1", "Athreya", "21", "fsduf", "dfjh", "zcx"],
        ["1", "Athreya", "21", "fsduf", "dfjh", "zcx"],
        ["1", "Athreya", "21", "sdaf", "sdf", "zcx"],
        ["1", "Athreya", "21", "sdaf", "sdf", "zcx"],
        ["1", "Athreya", "21", "sdaf", "sdf", "adfh"],
        ["1", "Athreya", "21", "sdaf", "sdf", "adfh"],
        ["1", "Athreya", "21", "sddaf", "sdf", "adfh"],
        ["1", "Athreya", "21", "sdaf", "sdf", "adfh"],
        ["1", "Athreya", "21", "sdaf", "sdf", "zcx"],
        ["1", "Athreya", "21", "sada", "sdf", "zcx"],
        ["1", "Athreya", "21", "sada", "asas", "zcx"],
        ["1", "Athreya", "21", "sada", "asas", "zcx"],
        ["1", "Athreya", "21", "sdaf", "asas", "rerw"],
        ["1", "Athreya", "21", "sdaf", "asas", "rerw"],
        ["1", "Athreya", "21", "sdaf", "asas", "rerw"],
        ["1", "Athreya", "21", "sdaf", "sdf", "rerw"],
        
    ]
    return (
        <View style={mystyles.container}>
            <ScrollView horizontal>
                {/* <Text>TableCode</Text> */}
                <Table style={mystyles.totaltable}>
                    <Row data={HeaderData} textStyle={mystyles.header} style={mystyles.zing}/>
                    <Rows data={RowData} textStyle={mystyles.footer} style={{backgroundColor: '#D9E5D6'}}/>
                </Table>
            </ScrollView>
        </View>
    )
}

const mystyles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    totaltable: {
        paddingInline: 20,
        gap: 5,
    },
    header: {
        fontWeight: 900,
        color: "#2A4747",
        borderWidth: 3,
        // borderRadius: 5,
        textAlign: 'center',
        width: 100,
        fontSize: 24,
        borderColor: '#fff'
    },
    footer: {
        fontWeight: 900,
        color: "green",
        borderWidth: 3,
        // borderRadius: 5,
        textAlign: 'center',
        width: 100,
        fontSize: 18,
        borderColor: "#fff"
    },
    zing: {
        backgroundColor: '#94A4A7',
    }
})