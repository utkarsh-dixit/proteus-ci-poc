import React from 'react';
import { HELP_PAGE } from '../../Constants/constants';
import {View, Text, StyleSheet} from "react-native";

export default class FormRadios extends React.PureComponent {
	isChecked = radio => radio === this.props.checkedRadio;
	render() {
		const { handleRadioClick } = this.props;
		return null;
		// return (
		// 	<View className='help-page-radio-wrapper'>
		// 		<View className='help-page-radio-row'>
		// 			<View className='help-page-radio'>
		// 				<View
		// 					className={`circle ${
		// 						this.isChecked(
		// 							HELP_PAGE.BOOKING_FLOW.CHECK_STATUS,
		// 						)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 					onClick={() =>
		// 						handleRadioClick(
		// 							HELP_PAGE.BOOKING_FLOW.CHECK_STATUS,
		// 						)
		// 					}
		// 				/>
		// 				<Text
		// 					className={`radio-input ${
		// 						this.isChecked(
		// 							HELP_PAGE.BOOKING_FLOW.CHECK_STATUS,
		// 						)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 				>
		// 					Check Status
		// 				</Text>
		// 			</View>
		// 			<View className='help-page-radio'>
		// 				<div
		// 					className={`circle ${
		// 						this.isChecked(HELP_PAGE.BOOKING_FLOW.RESEND)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 					onClick={() =>
		// 						handleRadioClick(HELP_PAGE.BOOKING_FLOW.RESEND)
		// 					}
		// 				/>
		// 				<p
		// 					className={`radio-input ${
		// 						this.isChecked(HELP_PAGE.BOOKING_FLOW.RESEND)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 				>
		// 					Resend Tickets
		// 				</p>
		// 			</View>
		// 		</View>
		// 		<View className='help-page-radio-row'>
		// 			<View className='help-page-radio'>
		// 				<View
		// 					className={`circle ${
		// 						this.isChecked(
		// 							HELP_PAGE.BOOKING_FLOW.CANCEL_BOOKING,
		// 						)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 					onClick={() =>
		// 						handleRadioClick(
		// 							HELP_PAGE.BOOKING_FLOW.CANCEL_BOOKING,
		// 						)
		// 					}
		// 				/>
		// 				<Text
		// 					className={`radio-input ${
		// 						this.isChecked(
		// 							HELP_PAGE.BOOKING_FLOW.CANCEL_BOOKING,
		// 						)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 				>
		// 					Cancel Tickets
		// 				</Text>
		// 			</View>
		// 			<View className='help-page-radio'>
		// 				<View
		// 					className={`circle ${
		// 						this.isChecked(
		// 							HELP_PAGE.BOOKING_FLOW.MODIFY_BOOKING,
		// 						)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 					onClick={() =>
		// 						handleRadioClick(
		// 							HELP_PAGE.BOOKING_FLOW.MODIFY_BOOKING,
		// 						)
		// 					}
		// 				/>
		// 				<Text
		// 					className={`radio-input ${
		// 						this.isChecked(
		// 							HELP_PAGE.BOOKING_FLOW.MODIFY_BOOKING,
		// 						)
		// 							? 'active'
		// 							: ''
		// 					}`}
		// 				>
		// 					Modify Date/Time
		// 				</Text>
		// 			</View>
		// 		</View>
		// 	</View>
		// );
	}
}