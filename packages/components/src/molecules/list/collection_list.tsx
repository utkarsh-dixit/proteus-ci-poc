import React from "react";
import { StyleSheet, View, Text, ImageBackground, Platform } from "react-native";

type Props = {
    title: string;
    desc: string;
    items: Array<{
        id: number,
        name: string,
        image: string
    }>;
    limit?: number;
    style?: any;
};

export default class CollectionList extends React.PureComponent<Props>{

    static whyDidYouRender = true

    getItems() {
        let out = [];
        const limit = this.props.limit ? this.props.limit : 8;
        out = this.props.items.slice(0,limit).map((current, index) => {
            return (
                <ImageBackground key={index} imageStyle={styles.imageStyle} source={{ uri: current.image.replace(/^(\/\/\.*?)/i, "https://") }} style={styles.list_item}>
                    <View style={styles.overlay}></View>
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.imageText}>{current.name}</Text>
                    </View>
                </ImageBackground>
            );
        });
        if(this.props.items.length > limit) {
            return out.slice(0, limit - 1).concat((
                <ImageBackground key={limit} imageStyle={styles.imageStyle} source={{ uri: this.props.items[limit].image.replace(/^(\/\/\.*?)/i, "https://") }} style={styles.list_item}>
                <View style={styles.overlay}></View>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.imageText}>+{this.props.items.length - out.length} more</Text>
                </View>
            </ImageBackground>
            ));
        } else {
            return out;
        }
    }

    render() {
        return (
            <React.Fragment>
                <View style={[this.props.style]}>
                    <View style={styles.heading}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.heading_text}>{this.props.title}</Text>
                        </View>
                        {this.props.desc && (<Text style={styles.desc}>{this.props.desc}</Text>)}
                    </View>

                    {/* <Text>{Math.round(this.state.xOffset * 100/this.props.items.length)}</Text> */}
                </View>
                <View style={styles.list_container}>
                    {this.getItems()}
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 30,
        marginBottom: 20,
    },
    overlay: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0, 0.2)",
        top: 0,
        left: 0,
        width: Platform.OS === "web" ? "100%": "auto",
        height: Platform.OS === "web" ? "100%" : "auto"
    },
    titleContainer: {
         flex: 1, flexDirection: "row" 
    },
    itemTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    desc: {
        color: "rgb(84,84,84)",
        fontSize: 16,
        marginTop: 12,
        fontWeight: "300",
        fontFamily: "Avenir",
    },
    heading_text: {
        fontSize: 20,
        fontWeight: "600",
        color: "rgb(84,84,84)",
        lineHeight: 28,
        fontFamily: "Avenir",
    },
    list_container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        flexWrap: 'wrap',
        minHeight: "auto",
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    imageText: {
        color: "rgb(255, 255, 255)",
        fontSize: 16,
        fontWeight: "800",
        textAlign: "center",
        fontFamily: "Avenir",
        lineHeight: 22.22
    },
    list_item: {
        width: '50%',
        backgroundColor: "rgb(199,199, 205)",
        paddingTop: "48.5%",
        height: "auto",
        position: "relative"
    },
    imageStyle: {
        resizeMode: "cover", width: "100%"
    }
});