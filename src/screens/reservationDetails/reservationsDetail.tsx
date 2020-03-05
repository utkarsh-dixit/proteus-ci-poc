import React from 'react'
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import { Link } from '@headout/aer'
import MTicketIcon from '../../assets/icons/smartphone.svg'
import DownloadIcon from '../../assets/icons/download.svg'
import ReservationState from './components/reservationState';
import { ReservationTourDetail } from './components/reservationTourDetail'

export default class ReservationDetailScreen extends React.PureComponent {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: 16, marginRight: 16 }}>
                {/* Booking ID and ticket type section */}
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 56, }}>
                    <View style={{ flex: 2, height: '100%', justifyContent: 'center', }}>
                        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '800', textAlign: 'left', color: '#545454' }}>Booking ID: 5170780</Text>
                    </View>
                    <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', width: 128, height: 32, backgroundColor: '#ebebeb', justifyContent: 'center', alignItems: 'center', borderRadius: 35 }}>
                            <MTicketIcon />
                            <Text style={{ paddingLeft: 4, color: '#545454', fontSize: 12 }}>Mobile Ticket</Text>
                        </View>
                    </View>
                </View>
                {/* Reservation State */}
                <ReservationState bookingState={'cancelled'} />
                {/* Reservations Details */}
                <View style={{ marginTop: 16, borderRadius: 4, borderWidth: 1, borderColor: '#dadada', borderBottomWidth: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} >
                    {/* Tour details */}
                    <View style={{ backgroundColor: '#ebebeb', paddingTop: 24, paddingLeft: 16, paddingRight: 16 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: '#545454', letterSpacing: 0.35 }}>Eiffel Tower Summit Skip The Line Tickets with Optional Seine River Cruise</Text>
                        <Text style={{ color: '#545454', fontSize: 16, paddingTop: 8, paddingBottom: 8, fontWeight: '400' }}>Eiffel Tower Summit Access</Text>
                        <Link title={'View Product'}
                            textStyle={{ textDecorationLine: 'none', fontSize: 12, letterSpacing: 0.3 }}
                            style={{ paddingBottom: 16 }}
                            handleClick={() => {
                                console.log("Open product page")
                            }} />
                    </View>
                    {/* Guest details */}
                    <View style={{ marginLeft: 16, paddingBottom: 32, marginRight: 16 }}>
                        <ReservationTourDetail
                            title={'Guest Details'}
                            infoText={'Samira Alayan'}
                            subInfoText={'3 Adults'} />
                        <View style={{ flexDirection: 'row' }}>
                            <ReservationTourDetail
                                title={'Date'}
                                infoText={'Aug 16, 2019'} />
                            <ReservationTourDetail
                                title={'Duration'}
                                infoText={'2hr 30min'} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <ReservationTourDetail
                                title={'Start Time'}
                                infoText={'05:30 PM'}
                                ctaText={'Add to calendar'}
                                ctaOnClick={() => {
                                    console.log("Adding to calendar")
                                }} />
                            <ReservationTourDetail
                                title={'End Time'}
                                infoText={'08:30 PM'} />
                        </View>
                        <ReservationTourDetail
                            title={'React Here (location)'}
                            infoText={'38 Avenue de la Bourdonnais, 75007 Paris, France, Paris, Île-de-France, \nFR- 75007'}
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
                <View style={{ height: 200, borderWidth: 1, borderColor: '#dadada', borderTopWidth: 0 }}>
                </View>
                <TouchableOpacity style={{ marginTop: 32, flexDirection: 'row', justifyContent: 'center' }}>
                    <DownloadIcon width={20} height={20} />
                    <Text style={{ paddingLeft: 8, color: '#545454', fontSize: 16 }} >Save as PDF</Text>
                </TouchableOpacity>
            </ScrollView >
        )
    }
}
