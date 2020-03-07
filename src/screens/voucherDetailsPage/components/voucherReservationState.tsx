import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ReservationState } from '../../../constants/voucherConstants';

interface IProps {
    bookingState: ReservationState;
}


export default class VoucherReservationState extends React.PureComponent<IProps> {

    imageForBookingState(bookingState: ReservationState) {
        switch (bookingState) {
            case ReservationState.PENDING:
                return <Image source={require('../../../assets/images/roller-coaster/roller-coaster.png')} style={{ width: 32, height: 32 }} />
            case ReservationState.CONFIRMED:
                return <Image source={require('../../../assets/images/smile/smile.png')} style={{ width: 32, height: 32 }} />
            case ReservationState.CANCELLED:
                return <Image source={require('../../../assets/images/cry/cry.png')} style={{ width: 32, height: 32 }} />
        }
    }

    textForBookingState(bookingState: ReservationState) {
        switch (bookingState) {
            case ReservationState.PENDING:
                return 'Your reservation is in progress'
            case ReservationState.CONFIRMED:
                return 'Confirmed! You\'re all set.'
            case ReservationState.CANCELLED:
                return 'Sorry, your reservation has been cancelled. Your refund is under process'
        }
    }

    backGroundColorForBookingState(bookingState: ReservationState) {
        switch (bookingState) {
            case ReservationState.PENDING:
                return '#FFF8EF'
            case ReservationState.CONFIRMED:
                return '#DBFDDB'
            case ReservationState.CANCELLED:
                return '#FFD8D8'
        }
    }

    textColorForBookingState(bookingState: ReservationState) {
        switch (bookingState) {
            case ReservationState.PENDING:
                return '#755A0F'
            case ReservationState.CONFIRMED:
                return '#185332'
            case ReservationState.CANCELLED:
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
        marginTop: 16,
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
