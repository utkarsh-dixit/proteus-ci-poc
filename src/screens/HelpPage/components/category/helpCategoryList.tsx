import React from 'react';
import { View, Text, StyleSheet, ViewStyle, Platform } from 'react-native';
import { Link } from '@headout/aer';
import HelpTopic from './helpTopic';
import { Conditional } from '../../../../atoms/conditional';

const MAX_VISIBLE_TOPIC_COUNT = 4;

interface IProps {
    style: ViewStyle;
    header: string;
    topics: Array<{ NAME: string; SRC: string }>;
    onLinkClicked: (title: string, sourceLink: string) => void;
}

interface IState {
    isExpanded: boolean;
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
        const { isExpanded } = this.state
        return topics.length > MAX_VISIBLE_TOPIC_COUNT && !isExpanded
    }

    render() {
        const { style, header } = this.props;
        const { isExpanded } = this.state
        return (
            <View style={style}>
                <Text style={styles.heading}>{header}</Text>
                <Conditional if={isExpanded}>
                    {this.getAllTopicsForHelpCategory()}
                </Conditional>
                <Conditional if={!isExpanded}>
                    {this.getNonExpandedViewForHelpCategory()}
                </Conditional>
                <Conditional if={this.canShowExpandButton()}>
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
        color: '#444444',
        marginTop: 32,
        paddingBottom: 12,
        fontFamily: 'graphik',
        ...Platform.select({
            android: {
                fontFamily: 'Graphik-SemiBold'
            }
        })
    },
    showAllButton: {
        fontWeight: '400',
        fontSize: 16,
        color: '#03829D',
        textDecorationLine: "none",
        paddingTop: 12,
        paddingBottom: 12,
        fontFamily: 'graphik-semibold',
        ...Platform.select({
            android: {
                fontFamily: 'Graphik'
            }
        })
    },
});
