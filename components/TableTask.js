import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Row, Rows, Table, TableWrapper, Cell } from 'react-native-table-component'

export default function Table2() {
    const header = ["S.No", "Name", "Age", "Roll Number"];
    const data1 = [["1", "Athreya", "20", "22MH1A42E7"],
    ["2", "Athreya", "21", "22MH1A42E7"],
    ["3", "Athreya", "20", "22MH1A42E7"],
    ["4", "Athreya", "22", "22MH1A42E7"],
    ["5", "Athreya", "21", "22MH1A42E7"]];

    return (
        <View style={styles.parent}>
            <Text>Row Wise Building</Text>
            <Table>
                <Row data={header} flexArr={[1, 3, 1, 2]} style={{ width: "90%", backgroundColor: "#81A169" }} textStyle={styles.header} />
                {data1.map((rowData, index) => (
                    <Row
                        key={index}
                        data={rowData}
                        flexArr={[1, 3, 1, 2]}
                        style={[styles.eachRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
                        textStyle={styles.dataText}
                    />
                ))}
            </Table>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        fontSize: 12,
        fontWeight: 500,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "white"
    },
    eachRow: {
        width: "90%",
    },
    evenRow: {
        backgroundColor: '#ACADAC',
    },
    oddRow: {
        backgroundColor: '#C3E2D6',
    },
    dataText: {
        fontSize: 10,
        borderWidth: 1,
        textAlign: "center",
        borderColor: "white",
        textTransform: "capitalize"
    },
    parent: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
})