import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface IProps {
    bookingState: 'confirmed' | 'cancelled';
}


export default class ReservationState extends React.PureComponent<IProps> {

    imageForBookingState(bookingState: string) {
        switch (bookingState) {
            case 'confirmed':
                return <Image source={require('../../../assets/images/smile/smile.png')} style={{ width: 32, height: 32 }} />
            case 'cancelled':
                return <Image source={require('../../../assets/images/cry/cry.png')} style={{ width: 32, height: 32 }} />
        }
    }

    textForBookingState(bookingState: string) {
        switch (bookingState) {
            case 'confirmed':
                return 'Confirmed! You\'re all set.'
            case 'cancelled':
                return 'Sorry, your reservation has been cancelled. Your refund is under process'
        }
    }

    backGroundColorForBookingState(bookingState: string) {
        switch (bookingState) {
            case 'confirmed':
                return '#DBFDDB'
            case 'cancelled':
                return '#FFD8D8'
        }
    }

    textColorForBookingState(bookingState: string) {
        switch (bookingState) {
            case 'confirmed':
                return '#185332'
            case 'cancelled':
                return '#922727'
        }
    }

    render() {
        const {
            bookingState
        } = this.props;
        return (
            <View style={[styles.container, { backgroundColor: this.backGroundColorForBookingState(bookingState) }]}>
                {this.imageForBookingState(bookingState)}
                <View style={{ marginLeft: 8, marginRight: 16 }}>
                    <Text style={[styles.textStyle, { color: this.textColorForBookingState(bookingState), }]}>{this.textForBookingState(bookingState)}</Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '800',
        fontFamily: 'avenir-roman',
        paddingLeft: 16
    }
})
