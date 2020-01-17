import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import Link from "../../atoms/Link";
import {NativeModules} from 'react-native';
import PopUp from "../../atoms/Popup";
import {cross} from "../../assets/icons";

export const SidePopup = props => (
    <View style={styles.popUpWrapper}>
        <Link parentStyle={styles.popUpCancelCTA} onClick={()=>{PopUp.close()}}>
            {cross("#000", 18)}
                {/* <Image style={styles.popUpImage} source={{ uri: 'https://cdn-imgix-open.headout.com/Home%20Page/noun-cancel-1580467@3x.png' }} /> */}
        </Link>
        <Text style={[styles.h2, styles.popUpH2]}>Call us on our 24/7 helpline</Text>
        <Link style={styles.popUpLink} href='tel:+1 347 897 0100'>
            <Image style={styles.popUpImage} source={{ uri: 'https://cdn-imgix-open.headout.com/Home%20Page/ea-96390-badabde-0-fcca-95-c-181-f-4-c-40-fe@3x.png' }} />
            <Text style={styles.popUpLinkText}>+1 347 897 0100</Text>
        </Link>
        <Link style={styles.popUpLink} href='tel:+44 (20) 38747322'>
            <Image style={styles.popUpImage} source={{ uri: 'https://cdn-imgix-open.headout.com/Home%20Page/1280-px-flag-of-the-united-kingdom-svg@3x.png' }} />
            <Text style={styles.popUpLinkText}> +44 (20) 38747322</Text>
        </Link>
        <Link style={styles.popUpLink} href='tel:+33 (1) 85640771'>
            <Image style={styles.popUpImage} source={{ uri: 'https://cdn-imgix-open.headout.com/Home%20Page/3759217-f-3-e-9-e-6131272-e-59295-d-8247-bc@3x.png' }} />
            <Text style={styles.popUpLinkText}>+33 (1) 85640771</Text>
        </Link>
    </View>
);

export default class HelpStrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidePopupActive: false,
        };
    }

    openChatPopUp = () => {

    };
    openChat = () => {
        NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped()
    };
    openSidePopup = () => { PopUp.display(<SidePopup />); }

    render() {
        const { isSidePopupActive } = this.state;
        return (
            <View style={styles.needHelpStrip}>
                <Text style={styles.h2}>Still need help?</Text>
                <View style={styles.needHelpButtonWrapper}>
                    <Link style={styles.button} href="mailto:support@headout.com">
                        <Text>Email us</Text>
                    </Link>
                    <Link style={styles.button} onClick={()=>this.openChat()}>
                        <Text>Chat with us</Text>
                    </Link>
                    <Link style={styles.button} onClick={this.openSidePopup}>
                        <Text>Call Us</Text>
                    </Link>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    h2: {
        margin: 0,
        fontSize: 28,
        fontWeight: "800",
        fontStyle: "normal",
        textAlign: "left",
        color: "#545454"
    },
    popUpH2: {
        fontSize: 23
    },
    popUpWrapper: {
        flex: 1,
        alignItems: "center",
        borderRadius: 1,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#ebebeb",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#fff",
        paddingTop: 150
    },
    popUpCancelCTA: {
        position: "absolute",
        top: 30,
        right: 16.7,
        zIndex: 10,
        width: 20,
        height: 20
    },
    popUpImage: {
        width: 30,
        height: 20
    },
    popUpLink: {
        alignItems: "center",
        borderRadius: 1,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#ebebeb",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        width: 275,
        paddingBottom: 20,
        marginTop: 25
    },
    needHelpStrip: {
        flex: 1,
        alignItems: "center",
        marginTop: 90,
        paddingBottom: 40
    },
    needHelpButtonWrapper: {},
    button: {
        height: 55.5,
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ebebeb",
        backgroundColor: "#fff",
        marginTop: 15
    },
    popUpLinkText: {
        flex: 1,
        textAlign: "center",
        fontSize: 14,
        zIndex: 10
    }
    
});