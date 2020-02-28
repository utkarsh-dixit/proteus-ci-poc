import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import HelpScreen from './src/screens/helpPage/helpCenterScreen';

console.disableYellowBox = true;

AppRegistry.registerComponent('HelpScreen', () => HelpScreen);

CodePush.sync({
    updateDialog: true,
    installMode: CodePush.InstallMode.IMMEDIATE
});

export default HelpScreen;
