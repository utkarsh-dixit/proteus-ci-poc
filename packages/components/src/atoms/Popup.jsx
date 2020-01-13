import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import {mitt} from "../util/mitt";

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false,
            component: null
        }
        this.showPopUp = this.showPopUp.bind(this);
        this.hidePopUp = this.hidePopUp.bind(this);
    }

    componentDidMount() {
        mitt.on("popup", this.showPopUp);
        mitt.on("closePopUp", this.hidePopUp);
    }

    static display(component) {
        mitt.emit("popup", component);
    }

    static close(){
        mitt.emit("closePopUp");
    }

    hidePopUp() { 
        this.setState({showPopUp: false, component: null});
    }

    showPopUp(component) {
        this.setState({ showPopUp: true, component });
    }

    render() {
        const { children } = this.props;
        return (
            <>
                {this.state.showPopUp && (
                    <View style={styles.container}>
                        {this.state.component}
                    </View>
                )}
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 99,
        backgroundColor: "#fff"
    }
});