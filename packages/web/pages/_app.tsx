import App from "next/app";
import React from "react";
import LoadComponent from "./LoadComponent";
import  "../styles/common.css";


class MyApp extends App<any> {

  persistor: any;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById("document_loading_sign").style.display = "none";   
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LoadComponent Component={Component} {...pageProps} />
    );
  }
}

export default (MyApp);
