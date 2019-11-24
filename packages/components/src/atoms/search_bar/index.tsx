import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput
} from 'react-native';

type Props = {
    width?: number;
    value: string;
    placeholder?: string;
    callback: any;
    style?: any;
};

export default class SearchBar extends React.PureComponent<Props, any>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <TextInput
                style={[{ width: this.props.width}, styles.search_bar, this.props.style ]}
                onChangeText={this.props.callback}
                placeholder={this.props.placeholder}
                
                value={this.props.value}
            />
        );
    }
}

const styles = StyleSheet.create({
    search_bar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontFamily: "Avenir"
    }
});