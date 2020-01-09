import React from "react";
import dynamic from "next/dynamic";
// const HelpPage = dynamic(import("headout-components/src/screens/Help"));
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
