import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from '@headout/aer';
import { Conditional } from '../../../atoms/conditional';

interface IProps {
    title: string;
    infoText: string;
    subInfoText?: string;
    ctaText?: string;
    ctaOnClick?: () => void;
}

export const ReservationTourDetail = (props: IProps) => {
    const {
        title,
        infoText,
        subInfoText,
        ctaText,
        ctaOnClick
    } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>{title}</Text>
            <Text style={styles.infoTextStyle}>{infoText}</Text>
            <Conditional if={subInfoText}>
                <Text style={styles.infoTextStyle}>{subInfoText}</Text>
            </Conditional>
            <Conditional if={ctaText}>
                <Link title={ctaText}
                    textStyle={styles.ctaTextStyle}
                    handleClick={ctaOnClick} />
            </Conditional>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12
    },
    titleTextStyle: {
        color: '#757575',
        fontWeight: '400',
        fontSize: 12,
        paddingTop: 4,
        paddingBottom: 2,
        fontFamily: 'avenir-roman'
    },
    infoTextStyle: {
        color: '#545454',
        fontWeight: '800',
        fontSize: 16,
        paddingTop: 2,
        paddingBottom: 2,
        fontFamily: 'avenir-medium'
    },
    ctaTextStyle: {
        textDecorationLine: 'none',
        fontSize: 12,
        letterSpacing: 0.3,
        fontFamily: 'avenir-roman'
    }
})
