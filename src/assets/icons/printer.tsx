import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface IProps {
    width: number;
    height: number;
    strokeColor: string;
}

export const PrinterIcon = (props: IProps) => {
    const {
        width,
        height,
        strokeColor
    } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 17 16" fill="none" {...props}>
            <G
                clipPath="url(#prefix__clip0)"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M4.927 6V1.333h8V6M4.927 12H3.593a1.334 1.334 0 01-1.333-1.333V7.333A1.333 1.333 0 013.593 6H14.26a1.333 1.333 0 011.333 1.333v3.334A1.333 1.333 0 0114.26 12h-1.333" />
                <Path d="M12.927 9.333h-8v5.334h8V9.333z" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path d="M.927 0h16v16h-16V0z" fill="#fff" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
