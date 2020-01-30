import React from 'react';
import Link from '../../atoms/common/Link';
import { StyleSheet } from 'react-native';

export default class HelpTopic extends React.PureComponent {
    render() {
        const {
            title,
            sourceLink,
            onClick
        } = this.props;
        return (
            <Link style={styles.topic} title={title} onClick={() => {
                onClick(title, sourceLink);
            }}/>
        )
    }
}

const styles = StyleSheet.create({
    topic: {
        fontWeight:"400",
        fontSize:16,
        color:"#545454",
        paddingTop:12,
        paddingBottom:12
    }
})