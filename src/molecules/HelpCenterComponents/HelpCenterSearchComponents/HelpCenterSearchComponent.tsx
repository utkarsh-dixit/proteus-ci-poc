import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import SearchIcon from '../../../assets/icons/search.svg';
import HelpCenterSearchTopic from './HelpCenterSearchTopic';

interface IProps {
    style: any
    results: Array<{ NAME, SRC }>
    searchTextEntered: (text: string) => void
    onSearchTopicClicked: (title: string, sourceLink: string) => void
}

export default class HelpCenterSearchComponent extends React.PureComponent<IProps, any> {

    searchTopicClicked = (title: string, sourceLink: string) => {
        this.props.onSearchTopicClicked(title, sourceLink);
    }

    getSearchResultViews = (results) => {
        return results.map(helpTopic => {
            return (
                <HelpCenterSearchTopic
                    title={helpTopic.NAME}
                    sourceLink={helpTopic.SRC}
                    onClick={this.searchTopicClicked}
                />
            );
        });
    };

    render() {
        const { results, searchTextEntered } = this.props;
        return (
            <View style={{ backgroundColor: 'white', margin: 16 }}>
                <View style={[styles.searchBox]}>
                    <SearchIcon width={16} height={16} style={{ margin: 16, bottom: 1 }} />
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Search help articles'}
                        onChangeText={searchTextEntered}></TextInput>
                </View>
                <View style={styles.resultsContainer}>
                    {results.length > 0 ? (
                        <View>
                            {this.getSearchResultViews(results)}
                        </View>
                    ) : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        fontSize: 16,
        height: 48,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#dadada',
        borderRadius: 4,
    },
    textInput: {
        flex: 1,
        borderWidth: 0,
    },
    resultsContainer: {
        shadowColor: '#545454',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: 'white',
        opacity: 1.0,
        top: 4,
    },
});
