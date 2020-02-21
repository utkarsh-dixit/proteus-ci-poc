import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Link} from '@headout/aer';
import HelpTopic from './HelpTopic';
import { Conditional } from '../../../atoms/Conditional';

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

    getAllTopicsForHelpCategory = () => {
        const { topics } = this.props;
        return topics.map(topic => (
            <HelpTopic
                title={topic.NAME}
                sourceLink={topic.SRC}
                onClick={this.linkClicked}
            />
        ));
    }

    getNonExpandedViewForHelpCategory = () => {
        const { topics } = this.props;
        return topics.slice(0, MAX_VISIBLE_TOPIC_COUNT).map(topic => (
            <HelpTopic
                title={topic.NAME}
                sourceLink={topic.SRC}
                onClick={this.linkClicked}
            />
        ));
    }

    getShowAllButton = () => {
        return <Link
            textStyle={styles.showAllButton}
            title={'Show all'}
            handleClick={() => {
                this.setState({ isExpanded: true });
            }}
        />
    };

    canShowExpandButton = () => {
        const { topics } = this.props
        return topics.length > MAX_VISIBLE_TOPIC_COUNT && !this.state.isExpanded
    }

    render() {
        const { style, header } = this.props;
        return (
            <View style={style}>
                <Text style={styles.heading}>{header}</Text>
                <Conditional if={this.state.isExpanded}>
                    {this.getAllTopicsForHelpCategory()}
                </Conditional>
                <Conditional if={!this.state.isExpanded}>
                    {this.getNonExpandedViewForHelpCategory()}
                </Conditional>
                <Conditional if={this.canShowExpandButton}>
                    {this.getShowAllButton()}
                </Conditional>
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
