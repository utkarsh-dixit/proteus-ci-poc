import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

interface category {
    id: string;
    name: string;
    image: string;
};

type Props = {
    style?: any;
    data: category;
    callback?: any;
};

export default class CategoryCard extends React.PureComponent<Props, any>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={{...styles.container, ...this.props.style}}>
                <Image style={styles.item_image} source={{uri: this.props.data.image.replace(/^(\/\/\.*?)/i, "https://")}} />
                <Text style={styles.item_text}>{this.props.data.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        // alignItems: "center"
    },
    item_image:{
        height: 60,
        width: 60,
        alignSelf: "center",
        backgroundColor: "rgb(199,199, 205)",
        borderRadius: 100
    },
    item_text: {
        textAlign: "center",
        fontSize: 12.59,
        color: "rgba(0,0,0,0.7)",
        // fontFamily: "Avenir,proxima-nova,arial,sans-serif",
        fontWeight: "300",
        fontFamily: "Avenir",
        lineHeight: 20.69,
        marginTop: 10.1
    }
});