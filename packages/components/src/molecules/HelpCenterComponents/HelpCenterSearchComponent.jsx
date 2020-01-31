import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';

export default class HelpCenterSearchComponent extends React.PureComponent {
    render() {
        const {
            style,
            results
        } = this.props;
        return (
            <View style={[styles.container, {margin:16}]}>
                <SearchIcon width={16} height={16} style={{margin:16, bottom:1}}/>
                <TextInput style={styles.textInput}
                    placeholder={'Search help articles'}>
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
		fontSize: 16,
        height: 48,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#dadada",
        borderRadius:4
    },
    textInput: {
        borderWidth:0
    }
})