import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
    LayoutAnimation,
    View,
    Image,
    NativeModules,
} from 'react-native';
import { HEADOUT_CHATBOT_GROUP } from '../../../config';
import Link from '../../atoms//Link';
import { checkEmail } from '../../util/validationUtils';
import { doesBookingWithEmailAndIDExist } from '../../Thunks/HelpThunk';
import ChevronRight from '../../assets/icons/chevron-right.svg';
import { BOOKING_FLOW_HELP_OPTIONS, HELP_PAGE_CATEGORIES } from '../../constants/HelpPageConstants';
import HelpCenterBookingDetailsForm from '../../molecules/HelpCenterComponents/HelpCenterBookingDetailsForm';
import HelpPageCategoryList from '../../molecules/HelpCenterComponents/HelpCenterCategoryComponents/HelpCategoryList';
import BookingDetailsRadioButtonForm from '../../molecules/HelpCenterComponents/BookingDetailsRadioButtonForm';
import HelpCenterSearchComponent from '../../molecules/HelpCenterComponents/HelpCenterSearchComponents/HelpCenterSearchComponent';

interface IState {
    showReservationHelpForm: boolean,
    fetchInProgress: boolean,
    invalidEmail: boolean,
    invalidBookingId: boolean,
    error: string,
    bookingEmail: string,
    bookingId: string,
    emailAndBookingIdCombinationFetched: boolean,
    searchResults: Array<{ NAME: string, SRC: string }>,
}

interface IProps {
    rootTag: number
}

export default class HelpScreen extends React.PureComponent<IProps> {

    private searchableItemsIndex: Array<{ NAME, SRC }> = [];

    state: IState = {
        showReservationHelpForm: false,
        fetchInProgress: false,
        invalidEmail: false,
        invalidBookingId: false,
        error: '',
        bookingEmail: '',
        bookingId: '',
        emailAndBookingIdCombinationFetched: false,
        searchResults: [],
    };

    constructor(props) {
        super(props);
        HELP_PAGE_CATEGORIES.forEach((category) => {
            this.searchableItemsIndex.push(...category.OPTIONS)
        })
    }

    // ==== NAVIGATION METHODS =============================

    openHelpPage = (title: string, sourceURL: string) => {
        NativeModules.HelpCenterNativeBridge.openLink(
            sourceURL,
            title,
            this.props.rootTag,
        );
    };

    startChatWithAction = (action: string) => {
        NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped(
            {
                email: this.state.bookingEmail,
                bookingId: this.state.bookingId,
                action: action,
            },
            HEADOUT_CHATBOT_GROUP,
        );
    };

    resendTicketsForEmail = (bookingEmail: string) => {
        NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped(
            { email: bookingEmail, action: BOOKING_FLOW_HELP_OPTIONS.RESEND },
            HEADOUT_CHATBOT_GROUP,
        );
    };

    // =====================================================

    // ==== STATE MODIFICATION METHODS =====================

    showExistingeservationHelpFlow = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ showReservationHelpForm: true, error: '' });
    };

    bookingReservationsFilled = (bookingId: string, bookingEmail: string) => {
        const canFetchBookingDetails = this.validateBookingFieldsAndSetState(
            bookingId,
            bookingEmail,
        );
        if (canFetchBookingDetails) {
            // Have to set invalidEmail and invalidBookingId here as well due to asynchronicity issues.
            // The state set in `validateBookingFieldsAndSetState` get overriden here to incorrect values if these two fields
            // are not set.
            this.setState({
                fetchInProgress: true,
                invalidEmail: false,
                invalidBookingId: false,
                bookingEmail: bookingEmail,
                bookingId: bookingId,
            });
            this.fetchReservationDetails(bookingId, bookingEmail);
        }
    };

    validateBookingFieldsAndSetState = (bookingId: string, bookingEmail: string) => {
        const improperEmailInput = bookingEmail === '' || !checkEmail(bookingEmail);
        const improperBookingId = bookingId === '';
        this.setState({
            invalidEmail: improperEmailInput,
            invalidBookingId: improperBookingId,
        });
        return !improperBookingId && !improperEmailInput;
    };

    searchTextEntered = (text: string) => {
        if (text === '') {
            this.setState({ searchResults: [] });
            return;
        }
        const lowercaseText = text.toLowerCase();
        const results = this.searchableItemsIndex.filter(item => {
            return item.NAME.toLowerCase().includes(lowercaseText);
        });

        this.setState({ searchResults: results });
    };
    // =====================================================

    // ==== UI METHODS =====================================
    getHelpTopicsContainer = () => {
        return HELP_PAGE_CATEGORIES.map(category => (
            <HelpPageCategoryList
                style={{ paddingLeft: 16, paddingRight: 16 }}
                header={category.HEADING}
                topics={category.OPTIONS}
                onLinkClicked={this.openHelpPage}
            />)
        );
    };

    renderExistingReservationHelpForm = () => {
        if (this.state.showReservationHelpForm) {
            if (this.state.emailAndBookingIdCombinationFetched) {
                return (
                    <BookingDetailsRadioButtonForm
                        style={{ padding: 16 }}
                        startChatWithAction={this.startChatWithAction}
                        helpOptionSelectionError={this.showError}
                        restartBookingHelpFlow={this.restartBookingHelpFlow}
                    />
                );
            } else {
                return (
                    <HelpCenterBookingDetailsForm
                        style={{ padding: 16 }}
                        emailError={this.state.invalidEmail}
                        bookingIdError={this.state.invalidBookingId}
                        showLoadState={this.state.fetchInProgress}
                        onResendTicketsClick={this.resendTicketsForEmail}
                        onDoneClick={this.bookingReservationsFilled}
                    />
                );
            }
        } else {
            return (
                // Existing Reservation Link View
                <View style={{ flexDirection: 'row', padding: 16, marginTop: 16 }}>
                    <Link
                        title='Existing Reservation'
                        style={styles.existingReservationLink}
                        textStyle={styles.existingReservationText}
                        onClick={this.showExistingeservationHelpFlow}
                    />
                    <ChevronRight
                        width={16}
                        height={16}
                        style={{ left: 4, marginTop: 2 }}
                    />
                </View>
            );
        }
    };

    showError = (errorText: string) => {
        this.setState({ fetchInProgress: false, error: errorText });
    };
    // =====================================================

    // ==== ACTIONS ========================================

    fetchReservationDetails = async (bookingId: string, bookingEmail: string) => {
        await doesBookingWithEmailAndIDExist(
            bookingId,
            bookingEmail,
            exists => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                if (exists) {
                    this.setState({
                        fetchInProgress: false,
                        emailAndBookingIdCombinationFetched: true,
                        error: '',
                    });
                } else {
                    this.setState({
                        fetchInProgress: false,
                        emailAndBookingIdCombinationFetched: false,
                        error: 'This email and booking ID combination does not exist.',
                    });
                }
            },
        );
    };

    restartBookingHelpFlow = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({
            emailAndBookingIdCombinationFetched: false,
            showReservationHelpForm: true,
            error: '',
        });
    };

    // =====================================================

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ paddingTop: 10, marginBottom: 80 }}>
                    {/* Header */}
                    <Text style={styles.pageHeader}>Welcome to Headout Help Desk</Text>
                    {/* Main error */}
                    {this.state.error.length > 0 ? (
                        <Text style={styles.pageError}>{this.state.error}</Text>
                    ) : null}
                    {/* Main Reservation Details Form */}
                    {this.renderExistingReservationHelpForm()}
                    {/* Wallpaper */}
                    <View style={styles.wallpaperContainer}>
                        <Image
                            style={styles.wallpaperImage}
                            source={require('../../assets/images/help-page-wallpaper/help-page-wallpaper.png')}
                            resizeMode={'cover'}
                        />
                    </View>
                    {/* Search Bar */}
                    <HelpCenterSearchComponent
                        style={{ margin: 16 }}
                        searchTextEntered={this.searchTextEntered}
                        results={this.state.searchResults}
                        onSearchTopicClicked={this.openHelpPage}
                    />
                    {/* Category lists */}
                    {this.getHelpTopicsContainer()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    pageHeader: {
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 35,
        letterSpacing: -0.08,
        color: '#545454',
        textAlign: 'center',
    },
    pageError: {
        color: '#ec1943',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
    existingReservationLink: {
        justifyContent: 'flex-start',
    },
    existingReservationText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#24A1B2',
        textAlign: 'left',
    },
    wallpaperContainer: {
        aspectRatio: 375 / 200,
        marginTop: 16,
        marginBottom: 16,
        width: '100%',
    },
    wallpaperImage: {
        width: '100%',
        height: '100%',
    },
});
