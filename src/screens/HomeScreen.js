import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to QeTV!</Text>
//                <Button
//                    onPress={}
//                    title="View Interviews"
//                    color="#333333"
//                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});