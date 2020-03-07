import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TicketType } from '../../../constants/voucherConstants';
import MTicketIcon from '../../../assets/icons/smartphone.svg';
import { PrinterIcon } from '../../../assets/icons/printer';

interface IProps {
    ticketType: TicketType;
}

export default class VoucherTicketType extends React.PureComponent<IProps> {

    getTicketImage(ticketType: TicketType) {
        switch (ticketType) {
            case TicketType.MOBILE_TICKET:
                return <MTicketIcon />
            case TicketType.PRINT_TICKET:
                return <PrinterIcon width={16} height={16} strokeColor={'#545454'} />
        }
    }

    getTicketTypeText(ticketType: TicketType): string {
        switch (ticketType) {
            case TicketType.MOBILE_TICKET:
                return 'Mobile Ticket';
            case TicketType.PRINT_TICKET:
                return 'Print Ticket';
        }
    }

    render() {
        const {
            ticketType
        } = this.props;
        return (
            <View style={styles.ticketType}>
                {this.getTicketImage(ticketType)}
                <Text style={styles.ticketTypeText}>{this.getTicketTypeText(ticketType)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ticketType: {
        flexDirection: 'row',
        width: 128,
        height: 32,
        backgroundColor: '#ebebeb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
    ticketTypeText: {
        paddingLeft: 8,
        color: '#545454',
        fontSize: 12
    }
})
