
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
    category?: { id: number, name: string };
    ratings: { avg: number, total: number };
    pricing: number;
    currencyCode: string;
};

type Props = {
    title: string;
    desc?: string;
    items: Array<product>;
    style?: any;
    itemCallback?: any;
};
type State = {
    xOffset: number;
};

export default class CompactList extends React.Component<Props, State> {

    ref: any;

    constructor(props: Props) {
        super(props);
    }
    _prepareItem({ item, index }: any) {
        return (
            <ProductCard data={item} width={291} key={index} callback={this.props.itemCallback}>

            </ProductCard>
        );
    }

    render() {
        // console.log(this.props.items.length, this.state.xOffset);
        return (
            <View style={{ ...this.props.style, flex: 1 }}>
                <View style={styles.heading}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={styles.heading_text}>{this.props.title}</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>
                    {this.props.desc && (<Text style={styles.desc}>{this.props.desc}</Text>)}
                </View>

                <FlatList
                    data={this.props.items}
                    horizontal={true}
                    style={{ marginLeft: -4 }}
                    getItemLayout={(data: any, index) => (
                        {length: this.props.items.length, width: 291, offset: 291 * index, index}
                    )}
                    showsHorizontalScrollIndicator={true}
                    // persistentScrollbar={true}
                    renderItem={this._prepareItem.bind(this)}
                    keyExtractor={(item) => item.name}
                    legacyImplementation={Platform.OS !== "web" ? true : false}
                    // onScroll={this.handleScroll.bind(this)}
                    scrollEventThrottle={16}
                />

                {/* <Text>{Math.round(this.state.xOffset * 100/this.props.items.length)}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 30,
        marginBottom: 20
    },
    desc: {
        color: "rgb(84,84,84)",
        fontSize: 16,
        marginTop: 12,
        fontWeight:"300"
    },
    viewAll: {
        textAlign: "right",
        flex: 1,
        paddingRight: 28,
        color: "rgb(79, 195, 247)",
        fontWeight: "400"
    },
    heading_text: {
        fontSize: 20,
        fontWeight: "600",
        color: "rgb(84,84,84)",
        lineHeight: 28
    }
});