import React from 'react';
import { ImageStyle, ImageProps, ViewStyle, TextProps, TextStyle, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';

interface IProps {
    imageStyle: ImageStyle;
    imageSource: ImageSourcePropType;
    style: ViewStyle;
    textStyle: TextStyle;
    text: string;
    onPress: () => void
}

export const ImageButton = (props: IProps) => {
    const {
        imageStyle,
        imageSource,
        style,
        textStyle,
        text,
        onPress
    } = props;
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Image style={imageStyle} source={imageSource} />
            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}
