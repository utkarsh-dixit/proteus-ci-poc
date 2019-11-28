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

type Props = {
    style?: any;
}
export default class Headbar extends React.Component<Props>{

    constructor(props: Props){
        super(props);
    }

    shouldComponentUpdate(newProps){
        if(this.props===newProps){
            return false;
        }
        return true;
    }
    
    render(){
        return (
            <View style={[styles.container, this.props.style ]}>
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