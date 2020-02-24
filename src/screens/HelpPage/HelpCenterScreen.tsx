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
    Platform,
} from 'react-native';
import { HEADOUT_CHATBOT_GROUP } from '../../../config';
import { Link } from '@headout/aer';
import { checkEmail } from '../../util/validationUtils';
import { doesBookingWithEmailAndIDExist } from '../../thunks/helpThunk';
import ChevronRight from '../../assets/icons/chevron-right.svg';
import { BOOKING_FLOW_HELP_OPTIONS, HELP_PAGE_CATEGORIES } from '../../constants/helpPageConstants';
import HelpCenterBookingDetailsForm from './components/helpCenterBookingDetailsForm';
import HelpPageCategoryList from './components/category/helpCategoryList';
import BookingDetailsRadioButtonForm from './components/bookingDetailsRadioButtonForm';
import HelpCenterSearchComponent from './components/search/helpCenterSearch';
import { Conditional } from '../../atoms/conditional';

interface IState {
    showReservationHelpForm: boolean;
    fetchInProgress: boolean;
    invalidEmail: boolean;
    invalidBookingId: boolean;
    error: string;
    bookingEmail: string;
    bookingId: string;
    emailAndBookingIdCombinationFetched: boolean;
    searchResults: Array<{ NAME: string; SRC: string }>;
}

interface IProps {
    rootTag: number;
}

export default class HelpScreen extends React.PureComponent<IProps> {

    private searchableItemsIndex: Array<{ NAME: string; SRC: string }> = [];
    private currentScrollViewYOffset = 0;
    private _scrollView;

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

    openHelpPage = (title: string, sourceURL: string): void => {
        const {
            rootTag
        } = this.props;
        NativeModules.HelpCenterNativeBridge.openLink(
            sourceURL,
            title,
            rootTag,
        );
    };

    startChatWithAction = (action: string): void => {
        const {
            bookingEmail,
            bookingId
        } = this.state;
        NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped(
            {
                email: bookingEmail,
                bookingId: bookingId,
                action: action,
            },
            HEADOUT_CHATBOT_GROUP,
        );
    };

    resendTicketsForEmail = (bookingEmail: string): void => {
        NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped(
            { email: bookingEmail, action: BOOKING_FLOW_HELP_OPTIONS.RESEND },
            HEADOUT_CHATBOT_GROUP,
        );
    };

    // =====================================================

    // ==== STATE MODIFICATION METHODS =====================

    showExistingeservationHelpFlow = (): void => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ showReservationHelpForm: true, error: '' });
    };

    bookingReservationsFilled = (bookingId: string, bookingEmail: string): void => {
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

    validateBookingFieldsAndSetState = (bookingId: string, bookingEmail: string): boolean => {
        const improperEmailInput = bookingEmail === '' || !checkEmail(bookingEmail);
        const improperBookingId = bookingId === '';
        this.setState({
            invalidEmail: improperEmailInput,
            invalidBookingId: improperBookingId,
        });
        return !improperBookingId && !improperEmailInput;
    };

    searchTextEntered = (text: string): void => {
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

    setScrollViewContentOffset = (event): void => {
        this.currentScrollViewYOffset = event.nativeEvent.contentOffset.y;
    }

    scrollToYOffset = (y: number): void => {
        this._scrollView.scrollTo({ x: 0, y: this.currentScrollViewYOffset + y - 20, animated: true })
    }

    getHelpTopicsContainer = (): JSX.Element[] => {
        return HELP_PAGE_CATEGORIES.map(category => (
            <HelpPageCategoryList
                style={{ paddingLeft: 16, paddingRight: 16 }}
                header={category.HEADING}
                topics={category.OPTIONS}
                onLinkClicked={this.openHelpPage}
            />)
        );
    };

    renderExistingReservationHelpForm = (): JSX.Element => {
        const {
            showReservationHelpForm,
            emailAndBookingIdCombinationFetched,
            invalidEmail,
            invalidBookingId,
            fetchInProgress
        } = this.state;
        if (showReservationHelpForm) {
            if (emailAndBookingIdCombinationFetched) {
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
                        emailError={invalidEmail}
                        bookingIdError={invalidBookingId}
                        showLoadState={fetchInProgress}
                        onResendTicketsClick={this.resendTicketsForEmail}
                        onDoneClick={this.bookingReservationsFilled}
                    />
                );
            }
        } else {
            return (
                // Existing Reservation Link View
                <View style={styles.existingReservationContainer}>
                    <Link
                        title='Existing Reservation'
                        style={styles.existingReservationLink}
                        textStyle={styles.existingReservationText}
                        handleClick={this.showExistingeservationHelpFlow}
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

    showError = (errorText: string): void => {
        this.setState({ fetchInProgress: false, error: errorText });
    };
    // =====================================================

    // ==== ACTIONS ========================================

    fetchReservationDetails = (bookingId: string, bookingEmail: string): void => {
        doesBookingWithEmailAndIDExist(
            bookingId,
            bookingEmail).then((bookingExists: boolean) => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                if (bookingExists) {
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
            })
    };

    restartBookingHelpFlow = (): void => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({
            emailAndBookingIdCombinationFetched: false,
            showReservationHelpForm: true,
            error: '',
        });
    };

    // =====================================================

    render() {
        const {
            error,
            searchResults
        } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    ref={component => this._scrollView = component}
                    showsVerticalScrollIndicator={false}
                    onScroll={this.setScrollViewContentOffset}
                    scrollEventThrottle={32}
                    style={styles.scrollContainer}>
                    {/* Header */}
                    <Text style={styles.pageHeader}>Welcome to Headout Help Desk</Text>
                    {/* Main error */}
                    <Conditional if={error.length > 0}>
                        <Text style={styles.pageError}>{error}</Text>
                    </Conditional>
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
                        results={searchResults}
                        onSearchTopicClicked={this.openHelpPage}
                        scrollToYOffset={this.scrollToYOffset}
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
    scrollContainer: {
        paddingTop: 10,
        ...Platform.select({
            ios: {
                marginBottom: 80
            },
            android: {
                marginBottom: 20
            }
        })
    },
    existingReservationLink: {
        justifyContent: 'flex-start',
    },
    existingReservationText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#24A1B2',
        textDecorationLine: "none",
        textAlign: 'left',
    },
    existingReservationContainer: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16
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
