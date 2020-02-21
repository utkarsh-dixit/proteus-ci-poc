import React from 'react';
import {Link} from '@headout/aer';
import { StyleSheet } from 'react-native';

interface IProps {
    title: string,
    sourceLink: string,
    onClick: (title: string, sourceLink: string) => void
}

export default class HelpTopic extends React.PureComponent<IProps, any> {

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
                style={styles.topic}
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
        color: '#545454',
        paddingTop: 12,
        paddingBottom: 12,
    },
});
