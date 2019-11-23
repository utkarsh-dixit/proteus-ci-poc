import React from "react";
import {View, StyleSheet} from "react-native";
export default class FeedSperator extends React.PureComponent{
    render(){
        return (
            <View style={styles.seperator}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    seperator: {
        height: 0.5,
        borderBottomWidth: 0.2,
        marginTop: 8,
        borderBottomColor: "rgba(186, 186, 186, 0.5)"
    }
});