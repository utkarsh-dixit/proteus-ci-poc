import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Link} from '@headout/aer';

export default class HelpCenterSearchTopic extends React.Component {
    render() {
        const {
            title,
            sourceLink,
            onClick
        } = this.props;
        return (
            <View style={styles.container}>
                <Link textStyle={styles.topic} title={title} onClick={() => {
                    onClick(title, sourceLink);
                }}/>
                <View style={{height:0.0, backgroundColor:"#545454"}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:56, 
        backgroundColor:'white', 
        paddingTop:8
    },
    topic: {
        fontWeight:"500",
        fontSize:16,
        color:"#545454",
        padding:12
    }
})