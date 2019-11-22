/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppEntry from './entry';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppEntry);

export default AppEntry;