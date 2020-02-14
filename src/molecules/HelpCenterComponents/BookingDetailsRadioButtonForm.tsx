import React from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from '../../atoms/common/RadioButton';
import Button from '../../atoms/common/Button';
import Link from '../../atoms/common/Link';
import { BOOKING_FLOW_HELP_OPTIONS } from '../../constants/HelpPage/HelpPageConstants';

interface IProps {
    style: any,
    startChatWithAction: (helpOption: string) => void
    restartBookingHelpFlow: () => void
    helpOptionSelectionError: (errorMessage: string) => void
}

interface IState {
    selectedOption: string
}

export default class BookingDetailsRadioButtonForm extends React.PureComponent<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };
    }

    isChecked = radio => {
        return radio === this.state.selectedOption;
    };

    handleRadioClick = helpOption => {
        this.setState({ selectedOption: helpOption });
    };

    submitButtonText = () => {
        switch (this.state.selectedOption) {
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
        if (this.state.selectedOption === '') {
            this.props.helpOptionSelectionError('Please select an option');
        } else {
            this.props.startChatWithAction(this.state.selectedOption);
        }
    };

    render() {
        return (
            <View style={this.props.style}>
                <RadioButton
                    style={styles.radioButton}
                    text="Check Status"
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.CHECK_STATUS)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.CHECK_STATUS);
                    }}
                />
                <RadioButton
                    style={styles.radioButton}
                    text="Resend Tickets"
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.RESEND)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.RESEND);
                    }}
                />
                <RadioButton
                    style={styles.radioButton}
                    text="Cancel Tickets"
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.CANCEL_BOOKING)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.CANCEL_BOOKING);
                    }}
                />
                <RadioButton
                    style={styles.radioButton}
                    text="Modify Date/Time"
                    isSelected={this.isChecked(BOOKING_FLOW_HELP_OPTIONS.MODIFY_BOOKING)}
                    onClick={() => {
                        this.handleRadioClick(BOOKING_FLOW_HELP_OPTIONS.MODIFY_BOOKING);
                    }}
                />
                <Button
                    style={styles.buttonContainer}
                    title={this.submitButtonText()}
                    onClick={this.handleSubmitButtonTap}
                />
                <Link
                    style={{ marginTop: 12 }}
                    textStyle={styles.helperLink}
                    title={'Start again'}
                    onClick={this.props.restartBookingHelpFlow}
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