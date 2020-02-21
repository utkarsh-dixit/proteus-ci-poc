import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import SearchIcon from '../../../assets/icons/search.svg';
import HelpCenterSearchTopic from './HelpCenterSearchTopic';
import { Conditional } from '../../../atoms/Conditional';

interface IProps {
    style: any
    results: Array<{ NAME, SRC }>
    scrollToYOffset: (y: number) => void
    searchTextEntered: (text: string) => void
    onSearchTopicClicked: (title: string, sourceLink: string) => void
}

export default class HelpCenterSearchComponent extends React.PureComponent<IProps, any> {

    private _textInput;

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

    scrollSearchBarToTop = () => {
        const { scrollToYOffset } = this.props;
        this._textInput.measure((x, y, width, height, pageX, pageY) => {
            scrollToYOffset(pageY)
        })
    }

    render() {
        const { results, searchTextEntered } = this.props;
        return (
            <View style={styles.searchContainer}>
                <View style={[styles.searchBox]}>
                    <SearchIcon width={16} height={16} style={{ margin: 16, bottom: 1 }} />
                    <TextInput
                        ref={component => this._textInput = component}
                        style={styles.textInput}
                        placeholder={'Search help articles'}
                        onChangeText={searchTextEntered}
                        onFocus={this.scrollSearchBarToTop}
                    ></TextInput>
                </View>
                <View style={styles.resultsContainer}>
                    <Conditional if={results.length > 0}>
                        <View>
                            {this.getSearchResultViews(results)}
                        </View>
                    </Conditional>
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
