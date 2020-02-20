import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

/*
    
*/
export default class Button extends React.PureComponent {
    render() {
        const {
            title,
            onClick,
            style
        } = this.props;
        return (
            <TouchableOpacity style={style} onPress={onClick}>
                <Text style={styles.textStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: "600",
        fontStyle: 'normal'
    }
});
