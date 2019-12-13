
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

export default class CategoryList extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this._prepareItem = this._prepareItem.bind(this);
    }
    
    _prepareItem({ item, index }) {
        return (
            <CategoryCard data={item}callback={this.props.itemCallback} style={{width: 85, marginLeft: 6.5, borderColor: "transparent", marginRight: 6.5}}>

            </CategoryCard>
        );
    }

    getItemLayout(data: any, index) {
        return {length: 85, width: 85, offset: 98 * index, index};
    }
    getKeyExtractor(item){
        return item.id + "";
    }

    render() {
        const {items} = this.props;
        return (
            <View style={[this.props.style, {marginTop: 5 }]}>
                <FlatList
                    data={items}
                    horizontal={true}
                    renderItem={this._prepareItem}
                    keyExtractor={this.getKeyExtractor}
                    getItemLayout={this.getItemLayout}
                    removeClippedSubviews={true}
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
        fontWeight: "bold",
        fontFamily: "Avenir",
    }
});