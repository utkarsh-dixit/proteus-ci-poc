import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from "@headout/aer";
// import SearchIcon from '../../../assets/icons/search.svg';
import HelpCenterSearchTopic from './HelpCenterSearchTopic';

export default class HelpCenterSearchComponent extends React.PureComponent {

    getSearchResultViews = (results, onSearchTopicClicked) => {
        return results.map((helpTopic) => {
            return (
                <HelpCenterSearchTopic title={helpTopic.NAME}
                    sourceLink={helpTopic.SRC}
                    onClick={((title, sourceLink) => {
                        onSearchTopicClicked(title, sourceLink);
                    })} />
            )
        })
    }

    render() {
        const {
            results,
            searchTextEntered,
            onSearchTopicClicked
        } = this.props;
        return (
            <View style={{ backgroundColor: 'white', margin: 16 }}>
                <Input
                    style={styles.searchBox}
                    inputStyle={styles.textInput}
                    placeholder={'Search help articles'}
                    // icon={SearchIcon}
                    onChangeText={searchTextEntered}>
                </Input>
                <View style={styles.resultsContainer}>
                    {(results.length > 0) ? (
                        <View>
                            {this.getSearchResultViews(results, onSearchTopicClicked)}
                        </View>
                    ) : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        fontSize: 16,
        height: 48,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dadada",
        borderRadius: 4
    },
    textInput: {
        flex: 1,
        borderWidth: 0
    },
    resultsContainer: {
        shadowColor: '#545454',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: 'white',
        opacity: 1.0,
        top: 4
    }
})