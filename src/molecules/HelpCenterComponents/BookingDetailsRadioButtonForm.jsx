import React from 'react';
import { View, StyleSheet } from "react-native";
import RadioButton from '../../atoms/common/RadioButton';
import { Link, Button } from '@headout/aer';

export const BOOKING_HELP_OPTIONS = {
	CHECK_STATUS: 'CHECK_STATUS',
	RESEND: 'RESEND_TICKETS',
	CANCEL_BOOKING: 'CANCEL_BOOKING',
	MODIFY_BOOKING: 'MODIFY_BOOKING'
};

export default class BoookingDetailsRadioButtonForm extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			selectedOption: ''
		}
	}

	isChecked = (radio) => {
		return radio === this.state.selectedOption;
	}

	handleRadioClick = (helpOption) => {
		this.setState({ selectedOption: helpOption });
	}

	submitButtonText = () => {
		switch (this.state.selectedOption) {
			case BOOKING_HELP_OPTIONS.CHECK_STATUS:
			case BOOKING_HELP_OPTIONS.CANCEL_BOOKING:
			case BOOKING_HELP_OPTIONS.MODIFY_BOOKING:
				return 'Start Chat';
			case BOOKING_HELP_OPTIONS.RESEND:
				return 'Resend Tickets';
			default:
				return 'Start Chat';
		}
	}

	handleSubmitButtonTap = () => {
		console.log(this.state.selectedOption);
		this.props.startChatWithAction(this.state.selectedOption);
	}

	render() {
		return (
			<View className='help-page-radio-wrapper' style={this.props.style}>
				<RadioButton style={styles.radioButton}
					text='Check Status'
					isSelected={this.isChecked(BOOKING_HELP_OPTIONS.CHECK_STATUS)}
					onClick={() => { this.handleRadioClick(BOOKING_HELP_OPTIONS.CHECK_STATUS) }} />
				<RadioButton style={styles.radioButton}
					text='Resend Tickets'
					isSelected={this.isChecked(BOOKING_HELP_OPTIONS.RESEND)}
					onClick={() => { this.handleRadioClick(BOOKING_HELP_OPTIONS.RESEND) }} />
				<RadioButton style={styles.radioButton}
					text='Cancel Tickets'
					isSelected={this.isChecked(BOOKING_HELP_OPTIONS.CANCEL_BOOKING)}
					onClick={() => { this.handleRadioClick(BOOKING_HELP_OPTIONS.CANCEL_BOOKING) }} />
				<RadioButton style={styles.radioButton}
					text='Modify Date/Time'
					isSelected={this.isChecked(BOOKING_HELP_OPTIONS.MODIFY_BOOKING)}
					onClick={() => { this.handleRadioClick(BOOKING_HELP_OPTIONS.MODIFY_BOOKING) }} />
				<Button style={styles.buttonContainer} title={this.submitButtonText()} handleClick={this.handleSubmitButtonTap} />
				<Link style={{ marginTop: 12 }}
					textStyle={styles.helperLink}
					title={"Start again"}
					handleClick={this.props.restartBookingHelpFlow} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	radioButton: {
		paddingLeft: 0,
		paddingRight: 0,
		paddingTop: 8,
		paddingBottom: 8
	},
	buttonContainer: {
		height: 48,
		width: 164,
	},
	helperLink: {
		fontWeight: "500",
		fontSize: 12,
		color: "#24A1B2",
		textAlign: 'left'
	}
})