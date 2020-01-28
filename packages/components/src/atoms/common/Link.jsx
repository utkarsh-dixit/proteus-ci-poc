import React from "react";
import { StyleSheet, View, TouchableOpacity, Linking } from "react-native";

/*
    
*/
export default class Link extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleHref(link){
        Linking.openURL(link);
        console.log("Some implementation for : ", link);
    }

    render() {
        const { 
            children,
            style,
            href,
            parentStyle,
            onClick
         } = this.props;

        return (
            <TouchableOpacity style={parentStyle} onPress={href ? this.handleHref.bind(null, href) : onClick}>
                <View style={[styles.container, style]}>
                    {children}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Avenir-Roman'
    }
});