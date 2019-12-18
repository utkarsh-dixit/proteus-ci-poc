import App, { Container } from "next/app";
import React from "react";
import LoadComponent from "./LoadComponent";
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

class MyApp extends App<any> {

  persistor: any;

  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore)
  }

  componentDidMount() {
    document.getElementById("document_loading_sign").style.display = "none";
    
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
          <Container>
              <LoadComponent Component={Component} store={reduxStore} {...pageProps} />
          </Container>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
