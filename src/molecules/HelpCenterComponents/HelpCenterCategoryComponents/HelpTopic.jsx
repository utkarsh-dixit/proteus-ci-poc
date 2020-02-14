import React from 'react';
import {Link} from '@headout/aer';
import { StyleSheet } from 'react-native';

export default class HelpTopic extends React.PureComponent {
    render() {
        const {
            title,
            sourceLink,
            onClick
        } = this.props;
        return (
            <Link style={styles.topic} textStyle={styles.linkText} title={title} handleClick={() => {
                onClick(title, sourceLink);
            }}/>
        )
    }
}

const styles = StyleSheet.create({
    topic: {
        fontWeight:"400",
        fontSize:16,
        color: "#545454",
        paddingTop:12,
        paddingBottom:12
    },
    linkText: {
        color: "#545454",
        textDecorationLine: "none"
    }
})