import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView, LayoutAnimation} from 'react-native';
import BookingDetailsForm from '../../molecules/HelpCenterComponents/ReservationDetailsForm';
import Link from '../../atoms/common/Link';
import { checkEmail } from '../../util/validationUtil';

export default class HelpScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            reservationFlowVisible: false,
            fetchingUserReservationDetails: false,
            invalidEmail: false,
            invalidBookingId: false
        }
    }

    showExistingeservationHelpFlow = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({...this.setState, reservationFlowVisible:true});
    }

    validateBookingFieldsAndSetState = (bookingId, bookingEmail) => {
        improperEmailInput = (bookingEmail === '') || !checkEmail(bookingEmail);
        improperBookingId = bookingId === '';
        this.setState({...this.setState, invalidEmail: improperEmailInput, invalidBookingId: improperBookingId})
        return !improperBookingId && !improperEmailInput;
    }

    fetchReservationDetails = (bookingId, bookingEmail) => {
        canFetchBookingDetails = this.validateBookingFieldsAndSetState(bookingId,bookingEmail);
        if(canFetchBookingDetails) {
            this.setState({...this.state, fetchingUserReservationDetails: true, invalidEmail: false, invalidBookingId: false})
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop:10}}>
                    <Text style={styles.pageHeader}>Welcome to Headout Help Desk</Text>
                    {this.state.reservationFlowVisible ? (
                            <BookingDetailsForm style={{padding:16}}
                                emailError={this.state.invalidEmail}
                                bookingIdError={this.state.invalidBookingId}
                                showLoadState={this.state.fetchingUserReservationDetails}
                                onDoneClick={(bookingId, bookingEmail) => {
                                    this.fetchReservationDetails(bookingId, bookingEmail);
                                }}
                            />
                        ) : (
                            <Link title="Existing Reservation" 
                                style={styles.existingReservationLink}
                                textStyle={styles.existingReservationText}
                                onClick={() => {
                                   this.showExistingeservationHelpFlow();
                                }
                            }/>
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    pageHeader: {
        fontWeight: "600",
        fontSize: 32,
        lineHeight: 35,
        letterSpacing: -0.08,
        color: "#545454",
        textAlign:'center'
    },
    existingReservationLink: {
        padding:16,
        justifyContent:'flex-start'
    },
    existingReservationText: {
        fontWeight: "600",
        fontSize: 16,
        color: "#24A1B2",
        textAlign:'left'
    }
})