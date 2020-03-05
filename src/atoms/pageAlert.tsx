import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Cross from '../assets/icons/cross.svg'

interface IProps {
    title: string;
    subtitle: string;
    onClick: () => void;
    onClose: () => void;
}

export const PageAlert = (props: IProps) => {
    const {
        title,
        subtitle,
        onClose,
        onClick
    } = props;
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <View style={{ flex: 8 }}>
                <Text style={styles.title}>⚠️ {title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={onClose}>
                    <Cross width={16} height={16} style={{ marginTop: 8, marginRight: 8 }} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 2,
        borderColor: '#ef4c4c',
        height: 90,
        backgroundColor: '#ffece5',
        marginLeft: 16,
        marginRight: 16,
        borderWidth: 1
    },
    title: {
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        fontFamily: 'avenir-medium',
        color: '#444444',
        fontWeight: '800'
    },
    subtitle: {
        marginTop: 4,
        marginLeft: 16,
        marginRight: 56,
        fontFamily: 'avenir-roman',
        color: '#444444'
    }
})
