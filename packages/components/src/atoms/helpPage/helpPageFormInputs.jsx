import React from 'react';
import { HELP_PAGE } from '../../Constants/constants';
import {View, Text, TextInput, StyleSheet} from "react-native";

const FormInputs = props => {
	const {
		error,
		handleBlur,
		bookingIdExists,
		email,
		bookingId,
		handleInputChange,
	} = props;
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text style={styles.inputLabel}>Email</Text>
				<TextInput
					id='email'
					onBlur={() => handleBlur(HELP_PAGE.INPUT.EMAIL)}
					value={email}
					style={[styles.input, error.email ? styles.errorInput : null]}
					keyboardType='email-address'
					autoCapitalize='none'
					returnKeyType='done'
					onChangeText={text =>
						handleInputChange(text, HELP_PAGE.INPUT.EMAIL)
					}
				/>
			</View>
			{bookingIdExists && (
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Booking ID</Text>
					<TextInput
						id='bookingId'
						style={styles.input}
						onBlur={() => handleBlur(HELP_PAGE.INPUT.BOOKINGID)}
						placeholder='XXXX-XXX'
						value={bookingId}
						returnKeyType='done'
						onChangeText={text =>
							handleInputChange(
								text,
								HELP_PAGE.INPUT.BOOKINGID,
							)
						}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {

	},
	inputLabel: {
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: 16,
		color: "#545454"
	},
	input: {
		flex: 1,
		fontSize: 16,
		paddingLeft: 15,
        minHeight: 56,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#dadada",
		marginTop: 18,
	},
	errorInput: {
		borderColor: "red",
	},
	inputContainer: {
		marginTop: 40
	}
});
export default FormInputs;
