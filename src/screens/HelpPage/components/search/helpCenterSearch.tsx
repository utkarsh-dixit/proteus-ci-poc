import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Input } from "@headout/aer";
import SearchIcon from '../../../../assets/icons/search';
import HelpCenterSearchItem from './helpCenterSearchItem';
import { Conditional } from '../../../../atoms/conditional';

interface IProps {
    style: ViewStyle;
    results: Array<{ NAME: string, SRC: string }>;
    scrollToYOffset: (y: number) => void;
    searchTextEntered: (text: string) => void;
    onSearchTopicClicked: (title: string, sourceLink: string) => void;
}

export default class HelpCenterSearchComponent extends React.PureComponent<IProps> {

    private _textInput;

    searchTopicClicked = (title: string, sourceLink: string) => {
        const {
            onSearchTopicClicked
        } = this.props;
        onSearchTopicClicked(title, sourceLink);
    }

    getSearchResultViews = (results: Array<{ NAME: string; SRC: string }>) => {
        return results.map(helpTopic => (
            <HelpCenterSearchItem
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
        const { results, searchTextEntered, style } = this.props;
        return (
            <View style={[styles.searchContainer, style]}>
                <Input
                    ref={component => this._textInput = component}
                    style={styles.searchBox}
                    inputStyle={styles.textInput}
                    placeholder={'Search help articles'}
                    icon={SearchIcon}
                    iconWidth={16}
                    iconHeight={16}
                    onChangeText={searchTextEntered}
                    onFocus={this.scrollSearchBarToTop}
                >
                </Input>
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
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
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
        shadowColor: '#444444',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: 'white',
        opacity: 1.0,
        top: 4,
    },
});
