import React from 'react';
import Help from '../components/src/screens/HelpPage';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
    whyDidYouRender(React);
}

export default class Index extends React.Component {
    render() {
        return (
            <Help/>
        );
    }
}
