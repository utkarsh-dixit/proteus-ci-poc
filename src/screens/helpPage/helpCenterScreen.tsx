import React from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    LayoutAnimation,
    View,
    Image,
    NativeModules,
    Platform,
    Linking,
    Modal,
    TouchableOpacity
} from 'react-native';
import { HEADOUT_CHATBOT_GROUP } from '../../../config';
import { Link, Button } from '@headout/aer';
import { checkEmail } from '../../util/validationUtils';
import { doesBookingWithEmailAndIDExist } from '../../thunks/helpThunk';
import ChevronRight from '../../assets/icons/chevron-right.svg';
import Cross from '../../assets/icons/cross.svg'
import { BOOKING_FLOW_HELP_OPTIONS, HELP_PAGE_CATEGORIES, HELPLINE_NUMBERS } from '../../constants/helpPageConstants';
import HelpCenterBookingDetailsForm from './components/helpCenterBookingDetailsForm';
import HelpPageCategoryList from './components/category/helpCategoryList';
import BookingDetailsRadioButtonForm from './components/bookingDetailsRadioButtonForm';
import HelpCenterSearchComponent from './components/search/helpCenterSearch';
import { Conditional } from '../../atoms/conditional';
import { ImageButton } from '../../atoms/imageButton';
import { HeaderBackButton } from '../../atoms/headerBackButton';
import { PageAlert } from '../../atoms/pageAlert';
import { StackNavigationProp } from '@react-navigation/stack';
import { HelpNavigationStack } from './helpCenterNavigation';
import { RouteProp } from '@react-navigation/native';

interface IState {
    helplineNumbersViewVisible: boolean;
    showReservationHelpForm: boolean;
    fetchInProgress: boolean;
    invalidEmail: boolean;
    invalidBookingId: boolean;
    error: string;
    bookingEmail: string;
    bookingId: string;
    emailAndBookingIdCombinationFetched: boolean;
    shouldShowAlert: boolean;
    searchResults: Array<{ NAME: string; SRC: string }>;
}
type HelpCenterScreenNavigationProp = StackNavigationProp<HelpNavigationStack, 'HelpScreen'>

type HelpCenterRouteProp = RouteProp<HelpNavigationStack, 'HelpScreen'>

interface IProps {
    rootTag: number;
    navigation: HelpCenterScreenNavigationProp;
    route: HelpCenterRouteProp;
}

export default class HelpScreen extends React.PureComponent<IProps> {

    private searchableItemsIndex: Array<{ NAME: string; SRC: string }> = [];
    private currentScrollViewYOffset = 0;
    private _scrollView;

    state: IState = {
        helplineNumbersViewVisible: false,
        showReservationHelpForm: false,
        fetchInProgress: false,
        invalidEmail: false,
        invalidBookingId: false,
        error: '',
        bookingEmail: '',
        bookingId: '',
        emailAndBookingIdCombinationFetched: false,
        shouldShowAlert: true,
        searchResults: [],
    };

    constructor(props) {
        super(props);
        HELP_PAGE_CATEGORIES.forEach((category) => {
            this.searchableItemsIndex.push(...category.OPTIONS)
        })
        const {
            navigation,
            route
        } = this.props;
        navigation.setOptions({
            title: 'Help Center',
            headerLeft: () => (
                <HeaderBackButton onClick={() => {
                    NativeModules.HelpCenterNativeBridge.goBack(route.params.rootTag);
                }} />
            )
        })
    }

    // ==== NAVIGATION METHODS =============================

    openCoronavirusAlertHelpPage = () => {
        this.openHelpPage('Coronavirus Outbreak', 'https://headout.kb.help/8-coronavirus-outbreak/');
    }

    openHelpPage = (title: string, sourceURL: string): void => {
        const {
            navigation
        } = this.props;
        navigation.navigate('HelpFaqWebView', { title: title, uriToLoad: sourceURL })
    };

    openChat = (): void => {
        NativeModules.HelpCenterNativeBridge.chatWithUsButtonTapped(
            null,
            null
        );
    }

    showHelplineNumbers = (): void => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ helplineNumbersViewVisible: true })
    }

    openMailForSupport = (): void => {
        Linking.openURL('mailto:support@headout.com')
    }

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

    hideAlert = (): void => {
        this.setState({ shouldShowAlert: false });
    }

    showExistingReservationHelpFlow = (): void => {
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
        this._scrollView.scrollTo({ x: 0, y: this.currentScrollViewYOffset + y - 120, animated: true })
    }

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

    getExtraHelpOptionsContainer = () => {
        return (
            <View style={styles.helpOptionsContainer}>
                <Text style={styles.helpOptionsText}>Still need help?</Text>
                <Button style={styles.helpOptionsButtonStyle}
                    textStyle={styles.helpOptionsButtonTextStyle}
                    title={'Email us'}
                    handleClick={this.openMailForSupport}></Button>
                <Button style={styles.helpOptionsButtonStyle}
                    textStyle={styles.helpOptionsButtonTextStyle}
                    title={'Chat with us'}
                    handleClick={this.openChat}></Button>
                <Button style={styles.helpOptionsButtonStyle}
                    textStyle={styles.helpOptionsButtonTextStyle}
                    title={'Call us'}
                    handleClick={this.showHelplineNumbers}></Button>
            </View >
        )
    }

    getHelplineNumbersContainer = () => {
        return (
            <View>
                <TouchableOpacity style={{ width: 20, height: 20, marginTop: 48, marginLeft: 16 }} onPress={() => {
                    this.setState({ helplineNumbersViewVisible: false })
                }}>
                    <Cross width={20} height={20}></Cross>
                </TouchableOpacity>
                <View style={styles.helplineNumbersBackground}>
                    <Text style={{ fontSize: 24, color: '#545454', marginBottom: 32, fontFamily: 'avenir-roman' }}>Call us on our 24/7 helpline</Text>
                    <ImageButton imageStyle={styles.helplineNumberImageStyle}
                        imageSource={require('../../assets/images/us-flag/us-flag.png')}
                        text={HELPLINE_NUMBERS.USA}
                        textStyle={styles.helplineNumberTextStyle}
                        style={styles.helplineNumberButtonStyle}
                        onPress={() => {
                            Linking.openURL(`tel:${HELPLINE_NUMBERS.USA}`)
                        }} />
                    <ImageButton imageStyle={styles.helplineNumberImageStyle}
                        imageSource={require('../../assets/images/uk-flag/uk-flag.png')}
                        text={HELPLINE_NUMBERS.UK}
                        textStyle={styles.helplineNumberTextStyle}
                        style={styles.helplineNumberButtonStyle}
                        onPress={() => {
                            Linking.openURL(`tel:${HELPLINE_NUMBERS.UK}`)
                        }} />
                    <ImageButton imageStyle={styles.helplineNumberImageStyle}
                        imageSource={require('../../assets/images/clipperton-flag/clipperton-flag.png')}
                        text={HELPLINE_NUMBERS.CLIPPERTON}
                        textStyle={styles.helplineNumberTextStyle}
                        style={styles.helplineNumberButtonStyle}
                        onPress={() => {
                            Linking.openURL(`tel:${HELPLINE_NUMBERS.CLIPPERTON}`)
                        }} />
                </View >
            </View>
        )
    }

    renderExistingReservationHelpForm = () => {
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
                        title='Click here'
                        style={styles.existingReservationLink}
                        textStyle={styles.existingReservationText}
                        handleClick={this.showExistingReservationHelpFlow}
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
            searchResults,
            helplineNumbersViewVisible,
            shouldShowAlert
        } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView
                    ref={component => this._scrollView = component}
                    showsVerticalScrollIndicator={false}
                    onScroll={this.setScrollViewContentOffset}
                    keyboardDismissMode='on-drag'
                    scrollEventThrottle={32}
                    style={styles.scrollContainer}>
                    {/* Coronovirus alert */}
                    <Conditional if={shouldShowAlert}>
                        <View style={{ marginTop: 40 }}>
                            <PageAlert title={'Coronavirus alert'}
                                subtitle={'Click here to read the updated policy for cancelation & refunds'}
                                onClick={this.openCoronavirusAlertHelpPage}
                                onClose={this.hideAlert} />
                        </View>
                    </Conditional>
                    {/* Header */}
                    < Text style={styles.pageHeader}>Hi, have an existing reservation?</Text>
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
                        style={{ margin: 16, marginTop: 40 }}
                        searchTextEntered={this.searchTextEntered}
                        results={searchResults}
                        onSearchTopicClicked={this.openHelpPage}
                        scrollToYOffset={this.scrollToYOffset}
                    />
                    {/* Category lists */}
                    {this.getHelpTopicsContainer()}
                    {/* Still need help section */}
                    {this.getExtraHelpOptionsContainer()}
                </ScrollView>
                <Modal visible={helplineNumbersViewVisible} animationType={'slide'}>
                    {this.getHelplineNumbersContainer()}
                </Modal>
            </View>
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
        marginTop: 56,
        paddingLeft: 16,
        paddingBottom: 24,
        fontFamily: 'graphik-regular'
    },
    pageError: {
        color: '#ec1943',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        fontFamily: 'avenir-roman',
        letterSpacing: 0.2
    },
    scrollContainer: {
        paddingTop: 16,
        ...Platform.select({
            ios: {
                marginBottom: 20
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
        fontFamily: 'avenir-roman'
    },
    existingReservationContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16
    },
    wallpaperContainer: {
        aspectRatio: 375 / 200,
        marginTop: 40,
        marginBottom: 16,
        width: '100%',
    },
    wallpaperImage: {
        width: '100%',
        height: '100%',
    },
    helpOptionsText: {
        color: '#545454',
        textAlign: 'center',
        fontSize: 32,
        padding: 16,
        fontFamily: 'avenir-roman'
    },
    helpOptionsContainer: {
        margin: 32,
        alignItems: 'center'
    },
    helpOptionsButtonStyle: {
        width: 180,
        height: 56,
        borderWidth: 1.5,
        borderColor: '#ebebeb',
        backgroundColor: 'white',
        margin: 16
    },
    helpOptionsButtonTextStyle: {
        color: '#545454',
        fontSize: 16,
        fontWeight: '400'
    },
    helplineNumbersBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    helplineNumberTextStyle: {
        flex: 8,
        fontSize: 16,
        fontWeight: '400',
        color: '#545454',
        textAlign: 'left',
        marginRight: 16,
        fontFamily: 'avenir-roman'
    },
    helplineNumberImageStyle: {
        flex: 1.5,
        aspectRatio: 1.5,
        margin: 16
    },
    helplineNumberButtonStyle: {
        margin: 16,
        flexDirection: 'row',
        width: '55%',
        height: 56,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#ebebeb',
        borderWidth: 1.5
    }
});
