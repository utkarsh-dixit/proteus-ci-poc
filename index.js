import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import HelpScreenStack from './src/screens/helpPage/helpCenterNavigation';

console.disableYellowBox = true;

AppRegistry.registerComponent('HelpScreen', () => HelpScreenStack);

CodePush.sync({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    installMode: CodePush.InstallMode.ON_NEXT_RESTART
});
