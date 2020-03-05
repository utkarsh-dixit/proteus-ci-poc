import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    stroke: string;
    width: number;
    height: number;
}

function ArrowLeft(props: IProps) {
    const {
        stroke,
        width,
        height
    } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <Path
                d="M14 8H2M8 14L2 8l6-6"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ArrowLeft
