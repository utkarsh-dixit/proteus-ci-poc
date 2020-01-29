import React from 'react';
import BookingDetailsForm from '../../atoms/helpPage/helpPageFormInputs';
import RadioButtonForm from '../../atoms/helpPage/helpPageFormRadios';
import Button from "../../atoms/common/Button";
import Link from "../../atoms/common/Link";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import {View, Text, StyleSheet} from "react-native";
import { ActivityIndicator } from 'react-native';

const ReservationDetailsForm = props => {
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
		retrievingBookingDetails
	} = props;
	return (
		<>
			{userValidated ? (
				<RadioButtonForm
					handleRadioClick={e => handleRadioClick(e)}
					checkedRadio={selectedFlow}
					style={{paddingTop:16}}
				/>
			) : (
				<BookingDetailsForm
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
					{retrievingBookingDetails ? (
						<ActivityIndicator color='white'/>
					) : (
						<Text style={styles.getHelpButtonText}>{submitButtonText}</Text>
					)}
					
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

const ReservationFormContainerView = props => {
	const { existingReservationFlowVisible, errorMessage, existingReservationClick } = props;

	return (
		<View style={{paddingTop: 24}}>
			<View>
				<View style={{marginBottom: 0}}>
					<Text style={[styles.h2, {textAlign:'center'}]}>Welcome to Headout Help Desk</Text>
					{!!errorMessage && (
					<Text style={styles.errorMessage}>{errorMessage}</Text>
					)}
				</View>
				{existingReservationFlowVisible ? (
					<ReservationDetailsForm {...props} />
				) : (
					<Link
						// className={`modify-booking-line-cta bold-line-cta`}
						onClick={existingReservationClick}
						style={styles.linkContainer}
					>
						<View style={{flexDirection:'row'}}>
							<Text style={styles.linkText}>Existing Reservation</Text>
							<ChevronRight width={16} height={16} style={{left:4, marginTop:2}}/>
						</View>
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
		marginTop: 24
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
		marginTop: 52
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
export default ReservationFormContainerView;
