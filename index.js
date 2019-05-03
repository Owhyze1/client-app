/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import HomeScreen from './src/screens/HomeScreen';
//import Booking from './src/screens/Booking';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
