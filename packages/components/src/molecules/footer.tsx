import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {shadowgiver} from "../util/helpers";

type Props = {
    items: Array<{ id: string, icon: any, text: string}>;
    active: string;
    activeColor?: string;
};

export default class Footer extends React.Component<Props>{
    shouldComponentUpdate(newProps){
        if(this.props===newProps){
            return false;
        }
        return true;
    }
    
    render() {
        return (
            <View style={[styles.container]}>
                {this.props.items.map((value, index) => {
                    const active = value.id === this.props.active;
                    const activeColor = this.props.activeColor ? this.props.activeColor: "#ec1943";
                    return (
                        <View key={index} style={styles.item}>
                            <View style={styles.icon}>{ !active ? value.icon(22, "#545454") : value.icon(22, activeColor)}</View>
                            <View><Text style={[styles.text, {color: active ? activeColor : "#545454"}]}>{value.text}</Text></View>
                        </View>
                    );
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        zIndex: 3,
        ...shadowgiver(3, "#000", 5, 5)
    },
    icon: {
        paddingTop: 5,
        height: 31
    },
    item: {
        flex: 1,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "Avenir",
        color: "rgb(84, 84, 84)"
    }
});