import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default class Booking extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Enter first name',
            lastName: 'Enter last name',
            email: 'E-mail address',

         };
    }

    render(){
        return (
            <View style={styles.window}>
                <View style={styles.rows}>
                    <Text style={styles.text}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText = {(firstName) => this.setState({firstName})}
                        value = {this.state.firstName}
                    />
                </View>
                <View style={styles.rows}>
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText = {(lastName) => this.setState({lastName})}
                        value = {this.state.lastName}
                    />
                </View>
                <View style={styles.rows}>
                    <Text style={styles.text}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText = {(email) => this.setState({email})}
                        value = {this.state.email}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    window:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 20,

    },
    input: {
        fontSize: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
    },
});