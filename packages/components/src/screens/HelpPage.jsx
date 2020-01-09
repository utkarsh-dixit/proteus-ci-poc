import React from "react";
import {View, StyleSheet, ScrollView, Text, Image, Platform} from "react-native";
import Search from "../molecules/helpPage/helpPageSearch";

export default class HelpPage extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Search />
                {/* <Image source={{uri: "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218-1080x608.jpg"}}/> */}
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'web' ? '100vh' : '100%',
        paddingLeft: 11,
        paddingRight: 11
    }
});