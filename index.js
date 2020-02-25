import { AppRegistry } from 'react-native';
import HelpScreen from './src/screens/helpPage/helpCenterScreen';
import ReservationDetailsScreen from './src/screens/reservationDetails/reservationsDetail';

console.disableYellowBox = true;

AppRegistry.registerComponent('HelpScreen', () => HelpScreen);

export default HelpScreen;
