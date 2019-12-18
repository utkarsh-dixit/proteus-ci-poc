import React from "react";
import App from "components/src/App";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <App {...this.props} />
        );
    }
}

export default Home;
