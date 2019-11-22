
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import Swiper from 'react-native-web-swiper';


interface slide_item {
    image: string;
    code: string;
};
type Props = {
    slides: Array<slide_item>;
    height: number;
    callback: any;
};
type State = {};

export default class ImageSlider extends React.PureComponent<Props, State> {

    prepareSlides() {
        const { slides, callback } = this.props;
        return slides.map((value, index) => {
            return (
                <View style={[styles.slideContainer, styles.slide1]} key={index}>
                    <TouchableHighlight style={styles.slideContainer} onPress={callback}>
                        <ImageBackground source={{ uri: value.image }} style={{ flex: 1 }} ></ImageBackground>
                    </TouchableHighlight>
                </View>
            );
        })
    }

    getDots({ index , isActive, onPress }: any){
        return (
            <View style={{position: "relative", top: -12, width: 6, height: 6, marginLeft: 3, marginRight: 3, backgroundColor: isActive ? "white" : "transparent", borderWidth: 2, borderColor: "rgba(255,255,255,0.5)", borderRadius: 30}}></View>
        );
    }

    render() {
        return (
            <View style={{ ...styles.container, height: this.props.height }}>
                <Swiper minDistanceForAction={0.10}  springConfig={{ speed: 10 }} controlsProps={{
                    dotsTouchable: true,
                    dotsPos: 'bottom',
                    prevPos: false,
                    nextPos: false,
                    DotComponent: this.getDots
                }}>
                    {this.prepareSlides()}
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    slide1: {
        backgroundColor: 'rgb(199,199, 205)',
    }
});