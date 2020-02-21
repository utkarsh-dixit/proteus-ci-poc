import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from "@headout/aer";
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
        const {
            onSearchTopicClicked
        } = this.props;
        onSearchTopicClicked(title, sourceLink);
    }

    getSearchResultViews = (results: Array<{ NAME, SRC }>) => {
        return results.map(helpTopic => (
            <HelpCenterSearchTopic
                title={helpTopic.NAME}
                sourceLink={helpTopic.SRC}
                onClick={this.searchTopicClicked}
            />
        )
        );
    };

    render() {
        const { results, searchTextEntered } = this.props;
        return (
            <View style={styles.searchContainer}>
                <Input
                    style={styles.searchBox}
                    inputStyle={styles.textInput}
                    placeholder={'Search help articles'}
                    icon={SearchIcon}
                    iconWidth={16}
                    iconHeight={16}
                    onChangeText={searchTextEntered}>
                </Input>
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
    searchContainer: {
        backgroundColor: 'white',
        margin: 16
    },
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
