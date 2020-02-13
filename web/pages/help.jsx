import React from "react";
import HelpPage from "../../components/src/screens/HelpPage";
import Headbar from "../../components/src/molecules/headbar";
import Footer from "../../components/src/molecules/footer";
import { calendar, camera, collections, account, explore } from "../../components/src/assets/icons";

class HelpScreen extends React.Component {

    constructor(props) {
        super(props);
        this.footerNav = [{ id: "1", icon: explore, text: "Explore" }, { id: "2", icon: collections, text: "Collections" }, { id: "3", icon: account, text: "Account" }];
    }

    render() {
        return ( 
            <>
             <Headbar />
            <HelpPage {...this.props} />
            <Footer items={this.footerNav} active={"1"} />
            </>
        );
    }
}

export default HelpScreen;
