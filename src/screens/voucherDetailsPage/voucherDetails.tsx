import React from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet, NativeModules } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Link } from '@headout/aer';
import MTicketIcon from '../../assets/icons/smartphone.svg';
import DownloadIcon from '../../assets/icons/download.svg';
import VoucherReservationState from './components/voucherReservationState';
import { VoucherDetail } from './components/voucherDetail';
import { TicketType } from '../../constants/voucherConstants';
import Voucher from '../../models/voucher/voucher';
import { getVoucherDetailsFor } from '../../thunks/voucherThunk';
import { Conditional } from '../../atoms/conditional';
import VoucherPaxDetails from '../../models/voucher/voucherPaxDetails';
import { VoucherNavigationStack } from './voucherNavigation';
import { RouteProp } from '@react-navigation/native';
import { HeaderBackButton } from '../../atoms/headerBackButton';
import VoucherVendor from './components/voucherVendor';

type VoucherDetailsNavigationProp = StackNavigationProp<VoucherNavigationStack, 'VoucherDetails'>
type VoucherDetailRouteProp = RouteProp<VoucherNavigationStack, 'VoucherDetails'>

interface IProps {
    rootTag: number;
    publicItineraryId: string;
    navigation: VoucherDetailsNavigationProp;
    route: VoucherDetailRouteProp;
}

interface IState {
    voucher?: Voucher;
}

export default class VoucherDetailScreen extends React.PureComponent<IProps, IState> {

    state = {
        voucher: getVoucherDetailsFor('')
    }

    constructor(props) {
        super(props);
        const {
            navigation,
            route
        } = this.props;
        navigation.setOptions({
            title: 'Voucher',
            headerLeft: () => (
                <HeaderBackButton onClick={() => {
                    NativeModules.HelpCenterNativeBridge.goBack(route.params.rootTag);
                }} />
            )
        })
    }

    getTicketTypeText(ticketType: TicketType): string {
        switch (ticketType) {
            case TicketType.MOBILE_TICKET:
                return 'Mobile Ticket';
            case TicketType.PRINT_TICKET:
                return 'Print Ticket';
        }
    }

    getPaxCountText(paxDetails: VoucherPaxDetails): string {
        return paxDetails.paxBreakup.map((pax) => {
            return `${pax.count} ${pax.displayName}`
        }).join(', ')
    }

    render() {
        const {
            voucher
        } = this.state;

        return (
            <Conditional if={voucher !== undefined}>
                <View style={{ flex: 1, paddingTop: 16, backgroundColor: 'white' }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ height: 100, marginLeft: 16, marginRight: 16, marginBottom: 16 }}>
                        {/* Booking ID and ticket type section */}
                        <View style={styles.header}>
                            <View style={styles.bookingIdContainer}>
                                <Text style={styles.bookingIdTextStyle}>Booking ID: {voucher.bookingId}</Text>
                            </View>
                            <View style={styles.ticketTypeContainer}>
                                <View style={styles.ticketType}>
                                    <MTicketIcon />
                                    <Text style={styles.ticketTypeText}>{this.getTicketTypeText(voucher.ticketType)}</Text>
                                </View>
                            </View>
                        </View>
                        {/* Reservation State */}
                        <VoucherReservationState bookingState={voucher.reservationState} />
                        {/* Reservations Details */}
                        <View style={styles.voucherDetailsContainer} >
                            {/* Tour details */}
                            <View style={styles.tourDetailsContainer}>
                                <Text style={styles.tourNameTextStyle}>{voucher.tourName}</Text>
                                <Text style={styles.variantNameTextStyle}>{voucher.variantName}</Text>
                                <Link title={'View Product'}
                                    textStyle={styles.openProductLinkTextStyle}
                                    style={{ paddingBottom: 16 }}
                                    handleClick={() => {
                                        console.log("Open product page")
                                    }} />
                            </View>
                            {/* Guest details */}
                            <View style={{ marginLeft: 16, paddingBottom: 32, marginRight: 16 }}>
                                <VoucherDetail
                                    title={'Guest Details'}
                                    infoText={voucher.paxDetails.primaryCustomerName}
                                    subInfoText={this.getPaxCountText(voucher.paxDetails)} />
                                <View style={{ flexDirection: 'row' }}>
                                    <VoucherDetail
                                        title={'Date'}
                                        infoText={voucher.bookingDetails.date} />
                                    <VoucherDetail
                                        title={'Duration'}
                                        infoText={voucher.bookingDetails.duration} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <VoucherDetail
                                        title={'Start Time'}
                                        infoText={voucher.bookingDetails.startTime}
                                        ctaText={'Add to calendar'}
                                        ctaOnClick={() => {
                                            console.log("Adding to calendar")
                                        }} />
                                    <VoucherDetail
                                        title={voucher.bookingDetails.endTime}
                                        infoText={'08:30 PM'} />
                                </View>
                                <VoucherDetail
                                    title={'React Here (location)'}
                                    infoText={voucher.tourAddress}
                                    ctaText={'Get Directions'}
                                    ctaOnClick={() => {
                                        console.log("Getting directions")
                                    }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 24, height: 24, borderRadius: 12, borderColor: '#dadada', borderWidth: 1, right: 12 }}></View>
                            <View style={{ flex: 1, borderWidth: 0.5, borderColor: '#dadada', height: 0.5 }}></View>
                            <View style={{ width: 24, height: 24, borderRadius: 12, borderColor: '#dadada', borderWidth: 1, left: 12 }}></View>
                        </View>
                        <View style={styles.vendorDetails}>
                            <VoucherVendor
                                vendorDetails={voucher.vendorDetails}
                                tickets={voucher.tickets}
                            />
                        </View>
                        <TouchableOpacity style={{ marginTop: 32, flexDirection: 'row', justifyContent: 'center' }}>
                            <DownloadIcon width={20} height={20} />
                            <Text style={{ paddingLeft: 8, color: '#545454', fontSize: 16 }} >Save as PDF</Text>
                        </TouchableOpacity>
                    </ScrollView >
                    <Conditional if={voucher.tickets.length > 1}>
                        <TouchableOpacity style={styles.showAllTicketsButtonStyle}>
                            <Text style={styles.showAllTicketsTextStyle}>Show all QR Codes</Text>
                        </TouchableOpacity>
                    </Conditional>
                </View>
            </Conditional>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56
    },
    bookingIdContainer: {
        flex: 2,
        height: '100%',
        justifyContent: 'center',
    },
    bookingIdTextStyle: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'left',
        color: '#545454',
        fontFamily: 'avenir-medium'
    },
    ticketTypeContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ticketType: {
        flexDirection: 'row',
        width: 128,
        height: 32,
        backgroundColor: '#ebebeb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    ticketTypeText: {
        paddingLeft: 4,
        color: '#545454',
        fontSize: 12
    },
    voucherDetailsContainer: {
        marginTop: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#dadada',
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    tourDetailsContainer: {
        backgroundColor: '#ebebeb',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16
    },
    tourNameTextStyle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#545454',
        letterSpacing: 0.35,
        fontFamily: 'gotham-bold'
    },
    variantNameTextStyle: {
        color: '#545454',
        fontSize: 16,
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: '400',
        fontFamily: 'avenir-roman'
    },
    openProductLinkTextStyle: {
        textDecorationLine: 'none',
        fontSize: 12,
        letterSpacing: 0.3,
        fontFamily: 'avenir-roman'
    },
    vendorDetails: {
        borderWidth: 1,
        borderColor: '#dadada',
        borderTopWidth: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 24,
        borderRadius: 4
    },
    showAllTicketsButtonStyle: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222'
    },
    showAllTicketsTextStyle: {
        color: 'white',
        fontFamily: 'avenir-roman',
        fontWeight: '800',
        fontSize: 16
    }
})
