import React from "react";
import HelpPage from "../../components/src/screens/HelpPage";

class HelpScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HelpPage {...this.props} />
        );
    }
}

export default HelpScreen;
