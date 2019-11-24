import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { camera, right_arrow } from "../assets/icons";

type Props = {
    links: Array<{
        icon: any,
        text: string
    }>;
    style?: {};
    callback?: any;
}
export default class StyledLink extends React.PureComponent<Props>{
    getLinks() {
        const out = [];
        for (let i = 0; i < this.props.links.length; i++) {
            if (i !== 0) {
                out.push(<View key={i} style={[styles.container, this.props.style, styles.dotted]}>
                    <View style={{ height: 76, marginRight: 12.8, justifyContent: "center" }}>{this.props.links[i].icon(18)}</View>
                    <Text style={{ color: "rgb(84, 84, 84)", fontSize: 16, fontWeight: "400",  fontFamily: "Avenir" }}>{this.props.links[i].text}</Text>
                    <View style={{ alignItems: "center", marginLeft: "auto" }}>{right_arrow(12.8)}</View>
                    {/* <View>{right_arrow(76)}</View> */}
                </View>);
            } else {
                out.push(<View key={i} style={[styles.container, this.props.style]}>
                    <View style={{ height: 76, marginRight: 12.8, justifyContent: "center" }}>{this.props.links[i].icon(18)}</View>
                    <Text style={{ color: "rgb(84, 84, 84)", fontSize: 16, fontWeight: "400",  fontFamily: "Avenir" }}>{this.props.links[i].text}</Text>
                    <View style={{ alignItems: "center", marginLeft: "auto" }}>{right_arrow(12.8)}</View>
                    {/* <View>{right_arrow(76)}</View> */}
                </View>);
            }
        }
        return out;
    }
    render() {
        return (
            <View>
                {this.getLinks()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center"
    },
    dotted: {
        borderTopWidth: 1,
        borderStyle: "dashed",
        borderTopColor: "rgb(186, 186, 186)"
    }
});