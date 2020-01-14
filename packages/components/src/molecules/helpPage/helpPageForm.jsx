import React from 'react';
import PropTypes from 'prop-types';
import FormInputs from '../../atoms/helpPage/helpPageFormInputs';
import FormRadios from '../../atoms/helpPage/helpPageFormRadios';
import EmbedSvg from '../embedSVG';
import Button from "../../atoms/Button";
import Link from "../../atoms/Link";

import {View, Text, Platform, StyleSheet} from "react-native";
import {tourListPageSVG} from "../../assets/icons";

const UserForm = props => {
	const {
		handleSubmit,
		bookingIdExists,
		handleHelperLineClick,
		error,
		userValidated,
		handleRadioClick,
		selectedFlow,
		submitButtonText,
		helperLineText,
		handleBlur,
		email,
		bookingId,
		handleInputChange,
	} = props;
	return (
		<>
			{userValidated ? (
				<FormRadios
					handleRadioClick={e => handleRadioClick(e)}
					checkedRadio={selectedFlow}
				/>
			) : (
				<FormInputs
					error={error}
					handleInputChange={(value, component) =>
						handleInputChange(value, component)
					}
					handleBlur={component => handleBlur(component)}
					bookingIdExists={bookingIdExists}
					email={email}
					bookingId={bookingId}
				/>
			)}
			<View>
				<Button
					style={styles.getHelpButton}
					onClick={handleSubmit}
				>
					<Text style={styles.getHelpButtonText}>{submitButtonText}</Text>
				</Button>
				<Link
					onClick={handleHelperLineClick}
				>
					<Text style={styles.helperLinkText}>{helperLineText}</Text>
				</Link>
			</View>
		</>
	);
};

const Form = props => {
	const { userNeedsHelp, errorMessage, handleHappyToHelpClick } = props;

	return (
		<View>
			<View>
				<View style={{marginBottom: 0}}>
					<Text style={styles.h2}>Hi, have an existing reservation?</Text>
					{!!errorMessage && (
					<Text style={styles.errorMessage}>{errorMessage}</Text>
					)}
				</View>
				{userNeedsHelp ? (
					<UserForm {...props} />
				) : (
					<Link
						// className={`modify-booking-line-cta bold-line-cta`}
						onClick={handleHappyToHelpClick}
						style={styles.linkContainer}
					>
						<Text style={styles.linkText}>{`We're happy to help   >`}</Text>
					</Link>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    h2: {
        fontWeight: "600",
        fontSize: 32,
        lineHeight: 35,
        letterSpacing: -0.08,
        color: "#545454",
	},
	linkContainer: {
		marginTop: 30
	},
	linkText: {
		fontSize: 16,
		fontWeight: "700",
		padding: 0,
		margin: 0,
		color: "#24a1b2"
	},
    errorMessage: {
		color: "#ec1943",
		fontSize: 15,
		marginTop: 15
	},
	getHelpButton: {
		backgroundColor: "#24a1b2",
		borderRadius: 2,
		flex: 1,
		alignItems: "center",
		marginTop: 50
	},
	getHelpButtonText: {
		flex: 1,
		fontWeight: "800",
		fontSize: 15,
		color: "#fff"
	},
	helperLinkText:{
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		textDecorationColor: "#24a1b2",
		color: "#24a1b2",
		fontSize: 12,
		marginTop: 24
	}
});
export default Form;
