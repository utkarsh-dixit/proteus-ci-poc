
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Platform
} from 'react-native';
import ProductCard from "../../atoms/card/product_card";

interface product {
    id: string;
    name: string;
    image: string;
    ratings: { avg: number, total: number };
    pricing: number;
    currencyCode: string;
};

type Props = {
    title: string;
    items: Array<product>;
    style?: any;
    itemCallback?: any;
};
type State = {};

export default class CompactList extends React.PureComponent<Props, State> {

    _prepareItem({ item, index }) {
        return (
            <ProductCard data={item} width={320} key={index} callback={this.props.itemCallback}>

            </ProductCard>
        );
    }
    render() {
        return (
            <View style={{ ...this.props.style, flex: 1 }}>
                <View style={styles.heading}><Text style={styles.heading_text}>{this.props.title}</Text></View>
                <FlatList
                    data={this.props.items}
                    horizontal={true}
                    style={{ height: 305 }}
                    renderItem={this._prepareItem.bind(this)}
                    keyExtractor={(item) => item.name}
                    legacyImplementation={Platform.OS !== "web" ? true : false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 22,
        marginBottom: 16
    },
    heading_text: {
        fontSize: 16.5,
        color: "rgba(0,0,0,0.65)",
        fontWeight: "bold"
    }
});