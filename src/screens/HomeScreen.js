import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to QeTV!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Media')}
                    title='Booking'
                    accessibilityLabel='Book an Interview'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});