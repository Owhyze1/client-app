import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

export default class Booking extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Enter first name',
            lastName: 'Enter last name',
            email: 'E-mail address',
            year: 2019,
            month: 5,
            day: 1,
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
                <View>
                    <Button
                        style={styles.button}
                        title = 'Choose date'
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
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 20,
        width: 80,
    },
    input: {
        fontSize: 20,
        height: 40,
        width: 300,
        borderColor: '#f0f0f5',
        borderWidth: 2,
        marginBottom: 5,
        marginTop: 5,
    },
    button: {
        width: 200,
    },
});