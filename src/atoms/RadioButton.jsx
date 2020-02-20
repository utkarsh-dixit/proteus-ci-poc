import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class RadioButton extends React.PureComponent {

    render() {
        const {
            isSelected,
            text,
            onClick
        } = this.props;
        return (
            <TouchableOpacity
                style={[{ flexDirection: 'row', alignItems: 'center' }, this.props.style]}
                onPress={onClick}>
                <View style={(isSelected ? styles.outerCircleSelected : styles.outerCircleUnSelected)}>
                    {isSelected ? (<View style={styles.innerCircle}></View>) : null}
                </View>
                <Text style={[{ left: 8 }, (isSelected ? styles.selectedText : styles.unselectedText)]}>{text || "<Insert content>"}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    outerCircleSelected: {
        height: 16,
        width: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#24A1B2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outerCircleUnSelected: {
        height: 14,
        width: 14,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#545454',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#24A1B2'
    },
    unselectedText: {
        color: '#545454',
        fontSize: 16,
    },
    selectedText: {
        color: '#24A1B2',
        fontSize: 16,
    }
})
