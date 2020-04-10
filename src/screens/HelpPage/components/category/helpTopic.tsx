import React from 'react';
import { Link } from '@headout/aer';
import { StyleSheet, Platform } from 'react-native';

interface IProps {
    title: string;
    sourceLink: string;
    onClick: (title: string, sourceLink: string) => void;
}

export default class HelpTopic extends React.PureComponent<IProps> {

    helpTopicClicked = () => {
        const {
            onClick,
            title,
            sourceLink
        } = this.props;
        onClick(title, sourceLink);
    }

    render() {
        const { title } = this.props;
        return (
            <Link
                textStyle={styles.topic}
                title={title}
                handleClick={this.helpTopicClicked}
            />
        );
    }
}

const styles = StyleSheet.create({
    topic: {
        fontWeight: '400',
        fontSize: 16,
        color: '#666666',
        textDecorationLine: "none",
        paddingTop: 12,
        paddingBottom: 12,
        fontFamily: 'avenir-roman',
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Regular'
            }
        })
    },
});
