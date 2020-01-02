import { AppRegistry } from 'react-native';
import React from 'react';
import Contacts from 'headout-components/src/screens/Contacts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
    whyDidYouRender(React);
}

export default class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Contacts store={store}/>
                </PersistGate>
            </Provider>
        );
    }
}
