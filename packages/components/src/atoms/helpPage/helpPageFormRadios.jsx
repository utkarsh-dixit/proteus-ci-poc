import React from 'react';
import { HELP_PAGE } from '../../screens/HelpPage/HelpPageData';
import {View, StyleSheet} from "react-native";
import RadioButton from '../common/RadioButton';

export default class RadioButtonForm extends React.PureComponent {
	isChecked = radio => radio === this.props.checkedRadio;
	render() {
		const { handleRadioClick } = this.props;
		return (
			<View className='help-page-radio-wrapper' style={this.props.style}>
				<RadioButton style={styles.radioButton}
								text='Check Status' 
								isSelected={this.isChecked(HELP_PAGE.BOOKING_FLOW.CHECK_STATUS)}
								onClick={() => {handleRadioClick(HELP_PAGE.BOOKING_FLOW.CHECK_STATUS)}}/>
				<RadioButton style={styles.radioButton}
									text='Resend Tickets' 
									isSelected={this.isChecked(HELP_PAGE.BOOKING_FLOW.RESEND)}
									onClick={() => {handleRadioClick(HELP_PAGE.BOOKING_FLOW.RESEND)}}/>
				<RadioButton style={styles.radioButton}
									text='Cancel Tickets' 
									isSelected={this.isChecked(HELP_PAGE.BOOKING_FLOW.CANCEL_BOOKING)}
									onClick={() => {handleRadioClick(HELP_PAGE.BOOKING_FLOW.CANCEL_BOOKING)}}/>
				<RadioButton style={styles.radioButton}
									text='Modify Date/Time' 
									isSelected={this.isChecked(HELP_PAGE.BOOKING_FLOW.MODIFY_BOOKING)}
									onClick={() => {handleRadioClick(HELP_PAGE.BOOKING_FLOW.MODIFY_BOOKING)}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	radioButton: {
		paddingLeft: 0,
		paddingRight:0,
		paddingTop: 8,
		paddingBottom: 8
	}
})