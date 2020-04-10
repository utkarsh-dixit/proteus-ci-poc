import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from './helpCenterScreen';
import HelpFaqWebView from './helpFaqWebView';
import { Platform } from 'react-native';

// === Creating Navigation Stack for Help Center =========

export type HelpNavigationStack = {
    HelpScreen: { rootTag: number };
    HelpFaqWebView: { uriToLoad: string; title: string };
};

const Stack = createStackNavigator<HelpNavigationStack>();
// ========================================================

interface IProps {
    rootTag: number;
}

function HelpCenterStack(props: IProps) {
    const {
        rootTag
    } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HelpScreen' screenOptions={{
                headerTitleStyle: {
                    ...Platform.select({
                        ios: {
                            fontFamily: 'avenir-light',
                            color: '#444444',
                            fontWeight: '200',
                            fontSize: 18
                        },
                        android: {
                            color: 'white',
                            fontSize: 18
                        }
                    })
                },
                headerStyle: {
                    ...Platform.select({
                        ios: {
                            backgroundColor: 'white'
                        },
                        android: {
                            backgroundColor: '#ec1943'
                        }
                    })
                }
            }}>
                <Stack.Screen name="HelpScreen" component={HelpScreen} initialParams={{ rootTag: rootTag }} />
                <Stack.Screen name="HelpFaqWebView" component={HelpFaqWebView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default HelpCenterStack;

