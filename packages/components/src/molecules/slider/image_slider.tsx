
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

export default class ImageSlider extends Component<Props, State> {

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

    render() {
        return (
            <View style={{ ...styles.container, height: this.props.height }}>
                <Swiper controlsProps={{
                    dotsTouchable: true,
                    dotsPos: 'bottom',
                    prevPos: false,
                    nextPos: false
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
        backgroundColor: 'rgba(20,20,200,0.3)',
    },
    slide2: {
        backgroundColor: 'rgba(20,200,20,0.3)',
    },
    slide3: {
        backgroundColor: 'rgba(200,20,20,0.3)',
    },
});