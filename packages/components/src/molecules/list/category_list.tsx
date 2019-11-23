
import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Platform
} from 'react-native';
import CategoryCard from "../../atoms/card/category_card";

interface category {
    id: string;
    name: string;
    image: string;
};

type Props = {
    items: Array<category>;
    style?: any;
    itemCallback?: any;
};
type State = {};

export default class CategoryList extends React.PureComponent<Props, State> {

    _prepareItem({ item, index }) {
        return (
            <CategoryCard data={item} key={index} callback={this.props.itemCallback} style={{width: 85, marginLeft: 6.5, borderColor: "transparent", marginRight: 6.5}}>

            </CategoryCard>
        );
    }
    render() {
        return (
            <View style={{ ...this.props.style, marginTop: 5 }}>
                <FlatList
                    data={this.props.items}
                    horizontal={true}
                    renderItem={this._prepareItem.bind(this)}
                    keyExtractor={(item) => item.name}
                    getItemLayout={(data: any, index) => (
                        {length: this.props.items.length, width: 85, offset: 98 * index, index}
                    )}
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