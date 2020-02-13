import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import {shadowgiver} from "../util/helpers";

export default class Headbar extends React.PureComponent{

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <View data-isheader data-sticky style={[styles.container, this.props.style]}>
                <Image style={styles.logo} source={{uri: "https://cdn-imgix-open.headout.com/logo/www-desktop-8743256.png?w=300&h=50&fit=fill"}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingLeft: 20,
        backgroundColor: "#fff",
        zIndex: 2,
        ...shadowgiver(4, "#000", 5, 10)
    },
    logo: {
        width: 125,
        height: 20
    }
});