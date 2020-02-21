import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Link} from '@headout/aer';
import HelpTopic from './HelpTopic';

const MAX_VISIBLE_TOPIC_COUNT = 4;

interface IProps {
    style: any,
    header: string,
    topics: Array<{ NAME, SRC }>,
    onLinkClicked: (title: string, sourceLink: string) => void,
}

interface IState {
    isExpanded: boolean
}

export default class HelpCategoryList extends React.PureComponent<IProps> {
    state: IState = {
        isExpanded: false,
    };

    linkClicked = (title: string, sourceLink: string) => {
        const { onLinkClicked } = this.props;
        onLinkClicked(title, sourceLink);
    }

    getListView = () => {
        const { topics } = this.props;
        if (this.state.isExpanded) {
            // return all the topics in that category
            return topics.map(topic => (
                <HelpTopic
                    title={topic.NAME}
                    sourceLink={topic.SRC}
                    onClick={this.linkClicked}
                />
            ));
        } else {
            // return a maximum of 4 topics
            const views: Array<any> = topics.slice(0, MAX_VISIBLE_TOPIC_COUNT).map(topic => (
                <HelpTopic
                    title={topic.NAME}
                    sourceLink={topic.SRC}
                    onClick={this.linkClicked}
                />
            ));
            if (topics.length > MAX_VISIBLE_TOPIC_COUNT) {
                // Need to show a show all button
                views.push(
                    <Link
                        textStyle={styles.showAllButton}
                        title={'Show all'}
                        handleClick={() => {
                            this.setState({ isExpanded: true });
                        }}
                    />,
                );
            }
            return views;
        }
    };

    render() {
        const { style, header } = this.props;
        return (
            <View style={style}>
                <Text style={styles.heading}>{header}</Text>
                {this.getListView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: '600',
        fontSize: 24,
        color: '#545454',
        paddingTop: 12,
        paddingBottom: 12,
    },
    showAllButton: {
        fontWeight: '400',
        fontSize: 16,
        color: '#24a1b2',
        textDecorationLine: "none",
        paddingTop: 12,
        paddingBottom: 12,
    },
});
