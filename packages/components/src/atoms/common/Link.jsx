import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";

/*
    
*/
export default class Link extends React.PureComponent {

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
                <View style={style}>
                    {children}
                </View>
            </TouchableOpacity>
        );
    }
}