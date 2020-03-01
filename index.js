import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import HelpScreen from './src/screens/helpPage/helpCenterScreen';

console.disableYellowBox = true;

AppRegistry.registerComponent('HelpScreen', () => HelpScreen);

CodePush.sync({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    installMode: CodePush.InstallMode.ON_NEXT_RESTART
});

export default HelpScreen;
