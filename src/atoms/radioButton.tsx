import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ViewStyle, Platform } from 'react-native';

interface IProps {
    style: ViewStyle;
    isSelected: boolean;
    text: string;
    onClick: () => void;
}

export const RadioButton = (props: IProps) => {
    const {
        isSelected,
        text,
        onClick,
        style
    } = props;
    return (
        <TouchableOpacity
            style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
            onPress={onClick}>
            <View style={(isSelected ? styles.outerCircleSelected : styles.outerCircleUnSelected)}>
                {isSelected ? (<View style={styles.innerCircle}></View>) : null}
            </View>
            <Text style={[{ left: 8 }, (isSelected ? styles.selectedText : styles.unselectedText)]}>{text || '<Insert content>'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outerCircleSelected: {
        height: 16,
        width: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#03829D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outerCircleUnSelected: {
        height: 14,
        width: 14,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#03829D'
    },
    unselectedText: {
        color: '#666666',
        fontSize: 16,
        fontFamily: 'avenir-roman',
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Regular'
            }
        })
    },
    selectedText: {
        color: '#03829D',
        fontSize: 16,
        fontFamily: 'avenir-roman',
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Regular'
            }
        })
    }
})
