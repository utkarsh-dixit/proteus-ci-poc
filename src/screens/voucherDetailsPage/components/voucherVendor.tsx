import React from 'react';
import VoucherVendorDetails from '../../../models/voucher/voucherVendorDetails';
import { VoucherDetailsNavigationProp } from '../voucherDetails';
import { View, Linking, Image, Text, StyleSheet } from 'react-native';
import { VoucherDetail } from './voucherDetail';
import { Conditional } from '../../../atoms/conditional';
import { TouchableWithoutFeedback } from 'react-native';
import { TicketType } from '../../../constants/voucherConstants';

interface IProps {
    navigation: VoucherDetailsNavigationProp;
    tickets: Array<{ ticketImageUrl?: string; ticketId: string }>;
    vendorDetails: VoucherVendorDetails;
}
export default class VoucherVendor extends React.PureComponent<IProps>  {

    vendorPhoneNumberClicked = () => {
        const {
            vendorDetails
        } = this.props;
        Linking.openURL(`tel:${vendorDetails.phoneNumber}`)
    }

    ticketImageClick = () => {
        const {
            tickets,
            navigation
        } = this.props;
        navigation.push('VoucherSingleCode', { ticketImageUrl: tickets[0].ticketImageUrl, ticketType: TicketType.MOBILE_TICKET, ticketId: tickets[0].ticketId })
    }


    render() {
        const {
            vendorDetails,
            tickets
        } = this.props;
        return (
            <View>
                <Conditional if={tickets && tickets.length == 1}>
                    <View style={styles.ticketContainer}>
                        <Conditional if={tickets[0].ticketImageUrl && tickets[0].ticketId}>
                            <TouchableWithoutFeedback onPress={this.ticketImageClick}>
                                <Image source={{ uri: tickets[0].ticketImageUrl }} style={styles.ticketImageStyle} />
                            </TouchableWithoutFeedback>
                            <Text style={styles.ticketIdNormalStyle}>#{tickets[0].ticketId}</Text>
                        </Conditional>
                        <Conditional if={tickets[0].ticketImageUrl === undefined && tickets[0].ticketId}>
                            <Text style={styles.vendorIdTitle}>Vendor ID</Text>
                            <Text style={styles.ticketIdBoldStyle}>#{tickets[0].ticketId}</Text>
                        </Conditional>
                    </View>
                </Conditional>
                <View style={styles.voucherDetails}>
                    <VoucherDetail
                        title={'Vendor Details'}
                        infoText={vendorDetails.name}
                        ctaText={vendorDetails.phoneNumber}
                        ctaOnClick={this.vendorPhoneNumberClicked}
                    />
                    <Conditional if={vendorDetails.imageUrl}>
                        <Image source={{ uri: vendorDetails.imageUrl }} style={styles.vendorImage} />
                    </Conditional>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ticketContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 44
    },
    ticketImageStyle: {
        height: 88,
        width: '100%',
        resizeMode: 'contain'
    },
    ticketIdNormalStyle: {
        paddingTop: 8,
        fontFamily: 'avenir-roman',
        color: '#444444',
        fontSize: 16
    },
    ticketIdBoldStyle: {
        paddingTop: 8,
        fontFamily: 'graphik-semibold',
        color: '#444444',
        fontSize: 16
    },
    vendorIdTitle: {
        fontFamily: 'avenir-roman',
        fontSize: 12,
        color: '#666666'
    },
    voucherDetails: {
        flexDirection: 'row',
        paddingTop: 24,
        alignItems: 'center'
    },
    vendorImage: {
        height: 20,
        flex: 1,
        resizeMode: 'contain',
        flexDirection: 'row-reverse'
    }
})
