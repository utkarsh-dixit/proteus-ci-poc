import {Platform} from "react-native";
export function shadowgiver(elevation, color, h = 0, r = 0) {
    const shadowOffset = { width: 0, height:  h? h : 0.5 * elevation };
    const shadowOpacity = 0.1;
    const shadowRadius = r ? r : 0.8 * elevation;
    const shadowColor = color || 'black';
    // console.log(`${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px ${shadowColor}`);
    return Platform.select({
        ios: {
            shadowColor: 'black',
            shadowOpacity,
            shadowRadius,
            shadowOffset,
        },
        android: {
            elevation,
        },
        web: {
            boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px rgba(0,0,0,0.1)`
        },
    });
}