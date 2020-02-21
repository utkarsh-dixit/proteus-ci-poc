import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Link} from '@headout/aer';

interface IProps {
    title: string,
    sourceLink: string,
    onClick: (title: string, sourceLink: string) => void
}

export default class HelpCenterSearchTopic extends React.Component<IProps, any> {

    openHelpTopic = () => {
        const {
            onClick,
            title,
            sourceLink
        } = this.props;
        onClick(title, sourceLink);
    }

    render() {
        const {
            title
        } = this.props;
        return (
            <View style={styles.container}>
                <Link textStyle={styles.topic} title={title} handleClick={this.openHelpTopic} />
                <View style={styles.searchTopicSeperator}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: 'white',
        paddingTop: 8
    },
    topic: {
        fontWeight: '500',
        fontSize: 16,
        color: '#545454',
        padding: 12
    },
    searchTopicSeperator: {
        height: 1.0,
        backgroundColor: '#545454'
    }
})
