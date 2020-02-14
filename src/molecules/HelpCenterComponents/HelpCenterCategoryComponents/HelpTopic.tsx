import React from 'react';
import Link from '../../../atoms/common/Link';
import { StyleSheet } from 'react-native';

interface IProps {
    title: string,
    sourceLink: string,
    onClick: (title: string, sourceLink: string) => void
}

export default class HelpTopic extends React.PureComponent<IProps, any> {

    helpTopicClicked = () => {
        this.props.onClick(this.props.title, this.props.sourceLink);
    }

    render() {
        const { title } = this.props;
        return (
            <Link
                style={styles.topic}
                title={title}
                onClick={this.helpTopicClicked}
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
