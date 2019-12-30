import React from "react";
import dynamic from "next/dynamic";
const Contacts = dynamic(import("components/src/screens/Contacts"));

class ContactScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Contacts {...this.props} />
        );
    }
}

export default ContactScreen;
