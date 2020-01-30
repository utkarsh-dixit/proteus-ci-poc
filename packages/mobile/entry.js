import React from 'react';
import Help from '../components/src/screens/HelpPage/HelpCenter';
import {NativeModules} from 'react-native';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
    whyDidYouRender(React);
}

export default class HelpScreen extends React.Component {

    openListicle = (link, title) => {
        NativeModules.HelpCenterNativeBridge.openLink(link,title,this.props.rootTag);
    }

    render() {
        return (
            <Help openListicle={this.openListicle}/>
        );
    }
}
