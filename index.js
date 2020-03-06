import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import HelpScreenStack from './src/screens/helpPage/helpCenterNavigation';
import * as Sentry from '@sentry/react-native';


console.disableYellowBox = true;

AppRegistry.registerComponent('HelpScreen', () => HelpScreenStack);

CodePush.sync({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    installMode: CodePush.InstallMode.ON_NEXT_RESTART
});

Sentry.init({
    dsn: 'https://43e6055371754efd961cec48b0b0cfe8@sentry.io/3806304',
});
