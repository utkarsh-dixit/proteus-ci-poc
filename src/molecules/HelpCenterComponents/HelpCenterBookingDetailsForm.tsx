import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import FormInputTextField from '../../atoms/common/FormInputTextField';
import Button from '../../atoms/common/Button';
import { StyleSheet } from 'react-native';
import Link from '../../atoms/common/Link';

export const BookingDetailError = {
    INVALID_EMAIL: { title: 'Please enter a valid email address.' },
    INVALID_BOOKING_ID: { title: 'Please enter the booking ID.' },
};

interface IProps {
    style: any;
    emailError: boolean;
    bookingIdError: boolean;
    showLoadState: boolean;
    onResendTicketsClick: (bookingEmail: string) => void;
    onDoneClick: (bookingId: string, bookingEmail: string) => void;
}

interface IState {
    bookingIDAvailable: boolean;
}

export default class HelpCenterBookingDetailsForm extends React.PureComponent<
    IProps,
    IState
    > {

    private bookingEmail: string = '';
    private bookingId: string = '';

    constructor(props) {
        super(props);
        this.state = {
            bookingIDAvailable: true,
        };
    }

    helperLinkText = () => {
        if (this.state.bookingIDAvailable) {
            return "I don't have a booking ID";
        } else {
            return 'I have a booking ID';
        }
    };

    submitButtonText = () => {
        if (this.state.bookingIDAvailable) {
            return 'Get Help';
        } else {
            return 'Resend Tickets';
        }
    };

    updateBookingId = (bookingId: string) => {
        this.bookingId = bookingId;
    }

    updateBookingEmail = (bookingEmail: string) => {
        this.bookingEmail = bookingEmail;
    }

    onDoneClick = () => {
        if (this.state.bookingIDAvailable) {
            this.props.onDoneClick(this.bookingId, this.bookingEmail);
        } else {
            this.props.onResendTicketsClick(this.bookingEmail);
        }
    };

    render() {
        const { style, showLoadState, emailError, bookingIdError } = this.props;
        return (
            <View style={style}>
                <FormInputTextField
                    style={{ paddingTop: 16, paddingBottom: 16 }}
                    title="Email"
                    placeholder="Enter booking email address"
                    errorText={emailError ? BookingDetailError.INVALID_EMAIL.title : null}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={this.updateBookingEmail}
                />
                {this.state.bookingIDAvailable ? (
                    <FormInputTextField
                        style={{ paddingTop: 16, paddingBottom: 16 }}
                        title="Booking ID"
                        subTitle="Please check your confirmation email from Headout"
                        placeholder="Enter your booking ID"
                        errorText={
                            bookingIdError
                                ? BookingDetailError.INVALID_BOOKING_ID.title
                                : null
                        }
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        returnKeyType="done"
                        onChangeText={this.updateBookingId}
                    />
                ) : null}
                {showLoadState ? (
                    <View style={styles.buttonContainer}>
                        <ActivityIndicator color="white" />
                    </View>
                ) : (
                        <Button
                            style={styles.buttonContainer}
                            title={this.submitButtonText()}
                            onClick={this.onDoneClick}
                        />
                    )}
                <Link
                    style={{ marginTop: 12 }}
                    textStyle={styles.helperLink}
                    title={this.helperLinkText()}
                    onClick={() => {
                        this.setState({
                            ...this.state,
                            bookingIDAvailable: !this.state.bookingIDAvailable,
                        });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        height: 48,
        width: 164,
        marginTop: 8,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#24a1b2',
        borderRadius: 2,
    },
    helperLink: {
        fontWeight: '500',
        fontSize: 12,
        color: '#24A1B2',
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
});
