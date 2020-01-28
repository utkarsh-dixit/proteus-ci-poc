import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

/*
    
*/
export default class Button extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            children,
            style,
            onClick
         } = this.props;

        return (
            <TouchableOpacity onPress={onClick}>
                <View style={[styles.container, style]}>
                    {children}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16,
        width: 164
     }
});