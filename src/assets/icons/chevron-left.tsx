import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width: number;
    height: number;
    stroke: string;
}

function SvgComponent(props: IProps) {
    const {
        width,
        height,
        stroke
    } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <Path
                d="M11.333 1.333L4.667 8l6.666 6.667"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
