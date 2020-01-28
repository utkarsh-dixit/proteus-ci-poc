import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";

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
            <TouchableOpacity style={parentStyle} onClick={href ? this.handleHref.bind(null, href) : onClick} onPress={href ? this.handleHref.bind(null, href) : onClick}>
                <View style={style}>
                    {children}
                </View>
            </TouchableOpacity>
        );
    }
}