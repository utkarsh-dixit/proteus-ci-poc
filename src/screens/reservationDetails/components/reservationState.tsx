import React from 'react';
import { View, Text, Image } from 'react-native';

interface IProps {
    bookingState: 'none' | 'interactive' | 'on-drag';
}


export default class ReservationState extends React.PureComponent<IProps> {

    imageForBookingState(bookingState: string) {
        switch (bookingState) {
            case 'confirmed':
                return '../../../assets/images/smile/smile.png'
            case 'cancelled':
                return '../../../assets/images/cry/cry.png'
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

    render() {
        const {
            bookingState
        } = this.props;
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require(this.imageForBookingState(bookingState))} style={{ width: 32, height: 32 }} />
                <Text style={{ fontSize: 16, color: '#545454', fontWeight: '600', marginLeft: 8 }}>{this.textForBookingState(bookingState)}</Text>
            </View >
        )
    }
}
