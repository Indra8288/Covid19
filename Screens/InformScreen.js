import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class InforScreen extends Component {
    render() {
        return (
            <View style={{ padding: 30 }}>
                <Text>Stay home Save lives</Text>
                <Text></Text>
                <Text></Text>
                <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderWidth: 2, borderColor: 'black' }}>
                    <View>
                        <Text>Icons</Text>
                    </View>
                    <View>
                        <Text>Symptoms</Text>
                        <Text>Learn Covid 19 Symptoms</Text>
                    </View>
                    <View><Text>Icon</Text></View>
                </TouchableOpacity>
                <Text></Text>
                <Text></Text>
                <TouchableOpacity style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderWidth: 2, borderColor: 'black' }}>
                    <View>
                        <Text>Icons</Text>
                    </View>
                    <View>
                        <Text>Prevention</Text>
                        <Text>Learn what to do</Text>
                    </View>
                    <View><Text>Icon</Text></View>
                </TouchableOpacity>
            </View>

        );



    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input_style: {
        borderColor: 'black', borderBottomWidth: 1, padding: 10

    }
});

export default InforScreen;
