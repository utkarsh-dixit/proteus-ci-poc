import App, { Container } from "next/app";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoadComponent from "./LoadComponent";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import {turnOnSSR} from "components/src/actions/miscActions";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import withRedux from "next-redux-wrapper";
import rootReducer from "components/src/reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const makeStore = (initialState = {misc:{ssr: true}}, options) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};


class MyApp extends App<any> {

  persistor: any;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById("document_loading_sign").style.display = "none";   
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
          <Container>
              <LoadComponent Component={Component} store={store} {...pageProps} />
          </Container>
      </Provider>
    );
  }

  
}

export default (withRedux(makeStore)(MyApp));
