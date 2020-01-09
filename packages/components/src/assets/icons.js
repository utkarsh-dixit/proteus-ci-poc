import React from "react";
import Svg, {
    Path,
    G,
    Circle,
} from "react-native-svg";

export const star = (color, height, style = {}) => {
    return null;
}

export const camera = (width, style = {}) => {
    return null;
}

export const calendar = (width, style = {}) => {
    return null;
}
export const right_arrow = (width, style = {}) => {
    return null;
};

export const explore = (height, color) => {
    return null;
}

export const collections = (height, color) => {
    return null;
};

export const account = (height, color) => {
    return  null;
}

export const half_star = (color, height, style = {}) => {
    return null;
}

export const cross = (color, height) => {
    return (
        <Svg width={height} height={height} preserveAspectRatio="xMidYMid meet"  xmlSpace="preserve" viewBox="0 0 47.971 47.971">
<G>
	<Path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill={color}/>
        </G>
        </Svg>
    )
}