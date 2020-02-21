import React from 'react';

class LoadComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

export default LoadComponent;
