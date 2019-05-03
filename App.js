import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import Booking from './src/screens/Booking';
import SocialMedia from './src/screens/SocialMedia';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Book: Booking,
        Media: SocialMedia,
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);

//const instructions = Platform.select({
//  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//  android:
//    'Double tap R on your keyboard to reload,\n' +
//    'Shake or press menu button for dev menu',
//});
//
//type Props = {};
//export default class App extends Component<Props> {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>Welcome to React Native!</Text>
//        <Text style={styles.instructions}>To get started, edit App.js</Text>
//        <Text style={styles.instructions}>{instructions}</Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
