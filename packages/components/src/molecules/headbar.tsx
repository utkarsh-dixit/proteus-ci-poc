import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ImageBackground
} from 'react-native';

type Props = {
    style?: any;
}
export default class Headbar extends React.PureComponent<Props>{

    constructor(props: Props){
        super(props);
    }
    
    render(){
        return (
            <View style={[styles.container, this.props.style]}>
                <Image style={styles.logo} source={{uri: "https://cdn-imgix-open.headout.com/logo/www-desktop-8743256.png?w=300&h=50&fit=fill"}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingLeft: 20,
        backgroundColor: "#fff"
    },
    logo: {

        width: 125,
        height: 20
    }
});