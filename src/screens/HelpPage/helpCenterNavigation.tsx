import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from './helpCenterScreen';
import HelpFaqWebView from './helpFaqWebView';

export type HelpNavigationStack = {
    HelpScreen: { rootTag: number };
    HelpFaqWebView: { uriToLoad: string; title: string };
};

interface IProps {
    rootTag: number;
}

const Stack = createStackNavigator<HelpNavigationStack>();

function HelpCenterStack(props: IProps) {
    const {
        rootTag
    } = props;
    console.log(rootTag);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HelpScreen' screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'avenir-light',
                    fontWeight: '200',
                    fontSize: 16
                }
            }}>
                <Stack.Screen name="HelpScreen" component={HelpScreen} initialParams={{ rootTag: rootTag }} />
                <Stack.Screen name="HelpFaqWebView" component={HelpFaqWebView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default HelpCenterStack;

