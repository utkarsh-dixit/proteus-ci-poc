import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";

/*
    
*/
export default class Link extends React.PureComponent {

    handleHref(link){
        Linking.openURL(link);
    }

    render() {
        const { 
            title,
            style,
            textStyle,
            href,
            onClick
         } = this.props;
        return (
            <TouchableOpacity style={style} onPress={href ? this.handleHref.bind(null, href) : onClick}>
                <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}