import React from 'react'
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import { Link } from '@headout/aer'
import MTicketIcon from '../../assets/icons/smartphone.svg'
import DownloadIcon from '../../assets/icons/download.svg'

export default class ReservationDetailScreen extends React.PureComponent {
    render() {
        return (
            <ScrollView style={{ margin: 16 }}>
                {/* Booking ID and ticket type section */}
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 56 }}>
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
                <View style={{ marginTop: 16, padding: 12, borderRadius: 4, borderWidth: 1, borderColor: '#dadada' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/smile/smile.png')} style={{ width: 32, height: 32 }} />
                        <Text style={{ fontSize: 16, color: '#545454', fontWeight: '600', marginLeft: 8 }}>Confirmed! You're all set.</Text>
                    </View>
                </View>
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
                    <View style={{ marginLeft: 16, paddingBottom: 32 }}>
                        <View style={{ paddingTop: 12 }}>
                            <Text style={{ color: '#757575', fontWeight: '400', fontSize: 12, paddingTop: 4, paddingBottom: 2 }}>Guest Details</Text>
                            <Text style={{ color: '#545454', fontWeight: '600', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}>Samira Alayan</Text>
                            <Text style={{ color: '#545454', fontWeight: '600', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}>3 adults</Text>
                        </View>
                        <View style={{ paddingTop: 12 }}>
                            <Text style={{ color: '#757575', fontWeight: '400', fontSize: 12, paddingTop: 4, paddingBottom: 2 }}>Date</Text>
                            <Text style={{ color: '#545454', fontWeight: '600', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}>Aug 16, 2019</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, paddingTop: 12 }}>
                                <Text style={{ color: '#757575', fontWeight: '400', fontSize: 12, paddingTop: 4, paddingBottom: 2 }}>Start Time</Text>
                                <Text style={{ color: '#545454', fontWeight: '600', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}>05:30 PM</Text>
                                <Link title={'Add to calendar'}
                                    textStyle={{ textDecorationLine: 'none', fontSize: 12, letterSpacing: 0.3 }}
                                    handleClick={() => {
                                        console.log("Add to calendar")
                                    }} />
                            </View>
                            <View style={{ flex: 1, paddingTop: 12 }}>
                                <Text style={{ color: '#757575', fontWeight: '400', fontSize: 12, paddingTop: 4, paddingBottom: 2 }}>End Time</Text>
                                <Text style={{ color: '#545454', fontWeight: '600', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}>08:00 PM</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, paddingTop: 12 }}>
                            <Text style={{ color: '#757575', fontWeight: '400', fontSize: 12, paddingTop: 4, paddingBottom: 2 }}>Reach Here</Text>
                            <Text style={{ color: '#545454', fontWeight: '600', fontSize: 16, paddingTop: 2, paddingBottom: 2 }}>38 Avenue de la Bourdonnais, 75007 Paris, France, Paris, Île-de-France, FR- 75007</Text>
                            <Link title={'Get Directions'}
                                textStyle={{ textDecorationLine: 'none', fontSize: 12, letterSpacing: 0.3 }}
                                handleClick={() => {
                                    console.log("Get directions")
                                }} />
                        </View>
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
