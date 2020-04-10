import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleProp, ViewStyle } from "react-native";

interface IProps {
    width: number;
    height: number;
    stroke: string;
    style: StyleProp<ViewStyle>;
}

export const ChevronRight = (props: IProps) => {
    const {
        width,
        height,
        stroke,
        style
    } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props} style={style}>
            <Path
                d="M4.667 14.667L11.333 8 4.667 1.333"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
