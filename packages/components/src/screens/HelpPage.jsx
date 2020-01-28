import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Platform, LayoutAnimation } from "react-native";
import getHelpPageComponent from "./common/HelpPage";
import HelpPageForm from '../molecules/helpPage/helpPageForm';
import PopUp from "../atoms/common/Popup";

class HelpPageMobile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			existingReservationFlowVisible: false,
			showForm: true,
			showPopUp: false,
			gettingBookingDetails: false
		};
	}

	hideForm = () => this.setState({ showForm: false });
	existingReservationClick = () => {
		const { existingReservationFlowVisible } = this.state;
		if (!existingReservationFlowVisible) {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			this.setState({ existingReservationFlowVisible: true });
		}
	};

	render() {
		const {
			error,
			submitButtonText,
			helperLineText,
			handleBlur,
			handleSubmit,
			bookingIdExists,
			bookingId,
			handleRadioClick,
			handleHelperLineClick,
			userValidated,
			selectedFlow,
			errorMessage,
			email,
			handleInputChange,
			children,
			retrievingBookingDetails
		} = this.props;
		const { existingReservationFlowVisible, showForm } = this.state;
		return (
			<SafeAreaView style={styles.topContainer}>
				<View style={styles.container} data-givemepadding={true}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{showForm && (
							<HelpPageForm
								error={error}
								submitButtonText={submitButtonText}
								helperLineText={helperLineText}
								handleSubmit={handleSubmit}
								bookingIdExists={bookingIdExists}
								handleHelperLineClick={handleHelperLineClick}
								userValidated={userValidated}
								handleRadioClick={e => handleRadioClick(e)}
								selectedFlow={selectedFlow}
								existingReservationFlowVisible={existingReservationFlowVisible}
								errorMessage={errorMessage}
								email={email}
								bookingId={bookingId}
								retrievingBookingDetails={retrievingBookingDetails}
								handleInputChange={(value, component) =>
									handleInputChange(value, component)
								}
								handleBlur={component => handleBlur(component)}
								existingReservationClick={this.existingReservationClick}
							/>
						)}
						{children}
					</ScrollView>
					<PopUp />
				</View>
			</SafeAreaView>
		);
	}
}
const HelpPage = getHelpPageComponent(HelpPageMobile);
export default HelpPage;

export const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	container: {
		position: "relative",
		margin: 0,
		paddingLeft: 16,
		paddingRight: 16,
		...Platform.select({
			web: {
				paddingBottom: 80
			},
			ios: {
				paddingBottom: 80
			}
		}),
		flex: 1
	}
});