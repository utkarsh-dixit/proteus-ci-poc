import { AppRegistry } from 'react-native';
import React from 'react';
import App from 'components/src/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';

export default class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App store={store}/>
                </PersistGate>
            </Provider>
        );
    }
}
