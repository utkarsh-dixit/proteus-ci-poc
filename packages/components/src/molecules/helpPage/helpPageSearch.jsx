import React from 'react';
// import Fuse from 'fuse';
import { Image, TextInput, View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, Platform, Linking } from 'react-native';
import { HELP_PAGE } from '../../Constants/constants';
import Fuse from "fuse.js";
import { cross } from "../../assets/icons";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
        };
    }

    componentDidMount() {

    }

    findResults = query => {
        const searchableItems = HELP_PAGE.LISTICLES.reduce(
            (accum, ele) => [...accum, ...ele.OPTIONS],
            [],
        );
        const options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ['NAME'],
        };
        // eslint-disable-next-line no-undef
        const fuse = new Fuse(searchableItems, options);
        const results = fuse.search(query);
        this.setState({ results });
    };

    search = value => {
        this.setState({ query: value }, () =>
            this.findResults(this.state.query),
        );
    };

    clearSearch = () => this.setState({ query: '' });

    openPage = (src) => Linking.openURL(src);
    render() {
        const { results, query } = this.state;
        return (
            <View>
                <View style={styles.helpPageSearchWrapper}>
                    <Image style={{ width: 17.7, height: 17.7, resizeMode: "contain" }} source={{ uri: 'https://cdn-imgix-open.headout.com/Home%20Page/noun-search-2017702@3x.png' }} />
                    <TextInput
                        placeholder='Search help articles'
                        onChangeText={this.search}
                        style={styles.helpPageSearchInput}
                        value={query}
                    />
                    {!!query && (
                        <TouchableWithoutFeedback onPress={this.clearSearch}>
                            <View style={styles.cancelCTA}>
                                {cross("#3d3d3d", 15)}
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>
                {!!query && (
                    <>
                        <View style={styles.articleSearchResults}>
                            {results.map(({ NAME, SRC }) => (
                                <TouchableWithoutFeedback onPress={this.openPage.bind(null, SRC)}>

                                    <View style={styles.searchItemContainer}>
                                        <Text style={styles.searchItem}>{NAME}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    </>
                )}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    helpPageSearchWrapper: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dadada",
        borderRadius: 4,
        flexDirection: "row",
        marginTop: 99,
        alignItems: "center",
        position: "relative",
        width: "100%",
        padding: 17.6,
        paddingTop: 9,
        paddingBottom: 9,
        ...Platform.select({
            web: {
                paddingTop: 17.6,
                paddingBottom: 17.6
            }
        })
    },
    helpPageSearchInput: {
        fontSize: 17.8,
        marginLeft: 12.3,
        flex: 0.8
    },
    articleSearchResults: {
        position: "absolute",
        top: "100%",
        marginTop: 11,
        left: 0,
        minWidth: "100%",
        backgroundColor: "white",
        borderRadius: 2,
        zIndex: 1,
        ...Platform.select({
            web: {
                boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
            },
            android: {
                elevation: 1
            }
        })
    },
    cancelCTA: {
        position: "absolute",
        right: 20,
        tintColor: "#000"
    },
    searchItemContainer: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 30,
        paddingRight: 30,
        borderStyle: "solid",
        borderColor: "#ebebeb",
        borderBottomWidth: 1,
        margin: 0
    },
    searchItem: {
        fontFamily: "Graphik",
        fontSize: 20,
        lineHeight: 25.4,
        // letterSpacing: "normal",
        textAlign: "left",
        color: "#545454"
    }
});