import { AppRegistry } from 'react-native';
import ReservationDetailsScreen from './src/screens/reservationDetails/reservationsDetail';
import CodePush from 'react-native-code-push';
import HelpScreenStack from './src/screens/helpPage/helpCenterNavigation';
import * as Sentry from '@sentry/react-native';
import { SENTRY_DSN } from './config';


console.disableYellowBox = true;

AppRegistry.registerComponent('HelpScreen', () => HelpScreenStack);
AppRegistry.registerComponent('ReservationDetailsScreen', () => ReservationDetailsScreen);

CodePush.sync({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    installMode: CodePush.InstallMode.ON_NEXT_RESTART
});

Sentry.init({
    dsn: SENTRY_DSN,
});
