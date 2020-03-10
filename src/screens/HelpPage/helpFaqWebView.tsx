import React from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { HelpNavigationStack } from './helpCenterNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Linking, ActivityIndicator, View, NativeModules } from 'react-native';
import { Conditional } from '../../atoms/conditional';
import { HeaderBackButton } from '../../atoms/headerBackButton';

type HelpFaqNavigationProp = StackNavigationProp<HelpNavigationStack, 'HelpFaqWebView'>
type HelpFaqRouteProp = RouteProp<HelpNavigationStack, 'HelpFaqWebView'>

interface IProps {
    uriToLoad: string;
    title: string;
    navigation: HelpFaqNavigationProp;
    route: HelpFaqRouteProp;
}

interface IState {
    isLoading: boolean;
}

export default class HelpFaqWebView extends React.PureComponent<IProps, IState> {
    webView: WebView = null;
    HIDE_HEADER_AND_NAVIGATION_JS = `var header = document.querySelector('.Header'); if (header) header.style.display = 'none'; var nav = document.querySelector('.Breadcrumbs--mobile'); if (nav) nav.style.display = 'none'; var lc = document.querySelector('#chat-widget-container'); if(lc) lc.style.display = 'none'; window.ReactNativeWebView.postMessage(document.title);`

    state = {
        isLoading: true
    }

    constructor(props) {
        super(props);
        const {
            navigation,
            route
        } = this.props;
        navigation.setOptions({
            title: route.params.title,
            headerLeft: () => (
                <HeaderBackButton onClick={() => {
                    navigation.pop()
                }} />
            )
        })
    }

    handleWebViewNavigationStateChange = (newNavState: WebViewNavigation) => {
        const { url } = newNavState;
        const { navigation, route } = this.props;
        const { uriToLoad } = route.params;
        if (!url) return;
        if (url.startsWith('https://headout.kb.help/') && url !== uriToLoad) {
            navigation.push('HelpFaqWebView', { uriToLoad: url, title: '' });
            this.webView.stopLoading();
        } else if (url.startsWith('https://lc.chat/')) {
            NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped(
                null,
                null
            );
            this.webView.stopLoading();
        } else if (url !== uriToLoad) {
            Linking.openURL(url);
            this.webView.stopLoading();
        }
    }

    stopLoading = () => {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 50)
    }

    setTitle = (message) => {
        console.log(message.nativeEvent.data);
        const {
            navigation,
            route
        } = this.props;
        if (route.params.title === '') {
            navigation.setOptions({ title: message.nativeEvent.data });
        }
    }

    render() {
        const {
            route
        } = this.props;
        const {
            isLoading
        } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    ref={ref => { this.webView = ref }}
                    source={{ uri: route.params.uriToLoad }}
                    onNavigationStateChange={this.handleWebViewNavigationStateChange}
                    injectedJavaScript={this.HIDE_HEADER_AND_NAVIGATION_JS}
                    onLoadEnd={this.stopLoading}
                    onMessage={this.setTitle}
                />
                <Conditional if={isLoading}>
                    <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%', height: '100%', backgroundColor: 'white' }}>
                        <ActivityIndicator color={'#ec1943'}></ActivityIndicator>
                    </View>
                </Conditional>
            </View>
        )
    }
}
