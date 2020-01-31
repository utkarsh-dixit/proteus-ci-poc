import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, LayoutAnimation, View, Image, NativeModules} from 'react-native';
import Link from '../../atoms/common/Link';
import { checkEmail } from '../../util/validationUtil';
import HelpThunk from '../../Thunks/HelpThunk';
import ChevronRight from '../../assets/icons/chevron-right.svg';
import { HELP_PAGE_CONSTANTS } from '../HelpPage/HelpPageData/HelpPageConstants';
import HelpCenterBookingDetailsForm from '../../molecules/HelpCenterComponents/HelpCenterBookingDetailsForm';
import HelpPageCategoryList from '../../molecules/HelpCenterComponents/HelpCenterCategoryComponents/HelpCategoryList';
import HelpCenterSearchComponent from '../../molecules/HelpCenterComponents/HelpCenterSearchComponent';

export default class HelpScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            reservationFlowVisible: false,
            fetchingUserReservationDetails: false,
            invalidEmail: false,
            invalidBookingId: false,
            emailAndBookingIdCombinationExists: true
        }
    }

    // ==== NAVIGATION METHODS =============================

    openHelpPage = (title, sourceURL) => {
        NativeModules.HelpCenterNativeBridge.openLink(sourceURL,title,this.props.rootTag);
    }

    // =====================================================

    // ==== STATE MODIFICATION METHODS =====================

    showExistingeservationHelpFlow = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({...this.setState, reservationFlowVisible:true});
    }

    bookingReservationsFilled = (bookingId, bookingEmail) => {
        canFetchBookingDetails = this.validateBookingFieldsAndSetState(bookingId,bookingEmail);
        if(canFetchBookingDetails) {
            // Have to set invalidEmail and invalidBookingId here as well due to asynchronicity issues.
            // The state set in `validateBookingFieldsAndSetState` get overriden here to incorrect values if these two fields
            // are not set.
            this.setState({...this.state, fetchingUserReservationDetails: true, invalidEmail: false, invalidBookingId: false});
            this.fetchReservationDetails(bookingId, bookingEmail);
        }
    }

    validateBookingFieldsAndSetState = (bookingId, bookingEmail) => {
        improperEmailInput = (bookingEmail === '') || !checkEmail(bookingEmail);
        improperBookingId = bookingId === '';
        this.setState({...this.setState, invalidEmail: improperEmailInput, invalidBookingId: improperBookingId})
        return !improperBookingId && !improperEmailInput;
    }

    fetchReservationDetails = async (bookingId, bookingEmail) => {
        await HelpThunk.doesBookingWithEmailAndIDExist(bookingId, bookingEmail, (exists) => {
            this.setState({...this.state, fetchingUserReservationDetails:false, emailAndBookingIdCombinationExists:exists})
        })
    }
    // =====================================================

    // ==== UI METHODS =====================================
    getHelpTopicsContainer = () => {
        console.log("Hey")
        return HELP_PAGE_CONSTANTS.LISTICLES.map((category) => {
            return <HelpPageCategoryList style={{paddingLeft:16, paddingRight:16}}
                        header={category.HEADING}
                        topics={category.OPTIONS}
                        onLinkClicked={(title, sourceURL) => {
                            this.openHelpPage(title, sourceURL)
                        }}
                   />
        })
    }
    // =====================================================

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop:10, marginBottom:80}}>
                    {/* Header */}
                    <Text style={styles.pageHeader}>Welcome to Headout Help Desk</Text>
                    {/* Main error */}
                    {!this.state.emailAndBookingIdCombinationExists ? (
                        <Text style={styles.pageError}>This email and booking ID combination does not exist.</Text>
                    ) : null}
                    {/* Main Reservation Details Form */}
                    {this.state.reservationFlowVisible ? (
                            <HelpCenterBookingDetailsForm style={{padding:16}}
                                emailError={this.state.invalidEmail}
                                bookingIdError={this.state.invalidBookingId}
                                showLoadState={this.state.fetchingUserReservationDetails}
                                onDoneClick={(bookingId, bookingEmail) => {
                                    this.bookingReservationsFilled(bookingId, bookingEmail);
                                }}
                            />
                        ) : (
                            // Existing Reservation Link View
                            <View style={{flexDirection:'row', padding:16, marginTop:16}}>
                                <Link title="Existing Reservation" 
                                style={styles.existingReservationLink}
                                textStyle={styles.existingReservationText}
                                onClick={() => {
                                   this.showExistingeservationHelpFlow();
                                }}/>
                            <ChevronRight width={16} height={16} style={{left:4, marginTop:2}}/>
                            </View>
                        )
                    }
                    {/* Wallpaper */}
                    <View style={styles.wallpaperContainer}>
                    <Image
                            style={styles.wallpaperImage}
                            source={require('../../assets/images/help-page-wallpaper/help-page-wallpaper.png')}
                            resizeMode={'cover'}/>
                    </View>
                    {/* Search Bar */}
                    <HelpCenterSearchComponent style={{margin:16}}/>
                    {/* Category lists */}
                    {
                        this.getHelpTopicsContainer()
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
    pageError: {
        color: '#ec1943',
        fontSize: 16,
        fontWeight:"500",
        paddingTop:16,
        paddingLeft:16,
        paddingRight:16
    },
    existingReservationLink: {
        justifyContent:'flex-start'
    },
    existingReservationText: {
        fontWeight: "600",
        fontSize: 16,
        color: "#24A1B2",
        textAlign:'left'
    },
    wallpaperContainer: {
        aspectRatio: 375/200,
         marginTop:16, 
         marginBottom:16,
         width:"100%"
    },
    wallpaperImage: {
        width:'100%',
        height:'100%'
    }
})