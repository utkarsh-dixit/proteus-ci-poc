import React from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';
import { RadioButton } from '../../../atoms/radioButton';
import { Link, Button } from '@headout/aer';
import { BOOKING_FLOW_HELP_OPTIONS } from '../../../constants/helpPageConstants';

interface IProps {
    style: ViewStyle;
    startChatWithAction: (helpOption: string) => void;
    restartBookingHelpFlow: () => void;
    helpOptionSelectionError: (errorMessage: string) => void;
}

interface IState {
    selectedOption: string;
}

export default class BookingDetailsRadioButtonForm extends React.PureComponent<IProps, IState> {
    state = {
        selectedOption: '',
    };

    isChecked = (radio: string) => {
        const { selectedOption } = this.state;
        return radio === selectedOption;
    };

    handleRadioClick = (helpOption: string) => {
        this.setState({ selectedOption: helpOption });
    };

    submitButtonText = () => {
        const { selectedOption } = this.state;
        switch (selectedOption) {
            case BOOKING_FLOW_HELP_OPTIONS.CHECK_STATUS:
            case BOOKING_FLOW_HELP_OPTIONS.CANCEL_BOOKING:
            case BOOKING_FLOW_HELP_OPTIONS.MODIFY_BOOKING:
                return 'Start Chat';
            case BOOKING_FLOW_HELP_OPTIONS.RESEND:
                return 'Resend Tickets';
            default:
                return 'Start Chat';
        }
    };

    handleSubmitButtonTap = () => {
        const {
            helpOptionSelectionError,
            startChatWithAction
        } = this.props;
        const { selectedOption } = this.state;
        if (selectedOption === '') {
            helpOptionSelectionError('Please select an option');
        } else {
            startChatWithAction(selectedOption);
        }
    };

    render() {
        const {
            style,
            restartBookingHelpFlow
        } = this.props;
        return (
            <View style={style}>
                <RadioButton
                    style={styles.radioButton}
                    text='Check Status'
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.CHECK_STATUS)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.CHECK_STATUS);
                    }}
                />
                <RadioButton
                    style={styles.radioButton}
                    text='Resend Tickets'
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.RESEND)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.RESEND);
                    }}
                />
                <RadioButton
                    style={styles.radioButton}
                    text='Cancel Tickets'
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.CANCEL_BOOKING)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.CANCEL_BOOKING);
                    }}
                />
                <RadioButton
                    style={styles.radioButton}
                    text='Modify Date/Time'
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.MODIFY_BOOKING)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.MODIFY_BOOKING);
                    }}
                />
                <Button
                    style={styles.buttonContainer}
                    textStyle={styles.buttonTextStyle}
                    title={this.submitButtonText()}
                    handleClick={this.handleSubmitButtonTap}
                />
                <Link
                    style={styles.helperLinkContainer}
                    textStyle={styles.helperLinkTextStyle}
                    title={'Start again'}
                    handleClick={restartBookingHelpFlow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radioButton: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 8,
        paddingBottom: 8,
    },
    buttonContainer: {
        flex: 1,
        height: 48,
        width: 164,
        marginTop: 8,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#03829D',
        borderRadius: 4,
    },
    helperLinkTextStyle: {
        fontWeight: '500',
        fontSize: 14,
        color: '#03829D',
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontFamily: 'avenir-roman',
        letterSpacing: 0.2,
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Regular'
            }
        })
    },
    helperLinkContainer: {
        marginTop: 12
    },
    buttonTextStyle: {
        fontFamily: 'avenir-roman',
        fontSize: 16,
        color: 'white',
        ...Platform.select({
            android: {
                fontFamily: 'Avenir-Regular'
            }
        })
    }
});
