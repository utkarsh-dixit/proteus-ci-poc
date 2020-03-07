import React from 'react';
import { View, Image } from 'react-native';
import { TicketType } from '../../../constants/voucherConstants';
import VoucherTicketType from './voucherTicketType';

interface IProps {
    ticketType: TicketType;
}

export const VoucherHeader = (props: IProps) => {
    const {
        ticketType
    } = props;
    return (
        <View style={{ width: '100%', height: 56, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image source={require('../../../assets/images/full-logo/full-logo.png')} style={{ paddingLeft: 16, height: 20 }} />
            <VoucherTicketType ticketType={ticketType} />
        </View>
    )
}
