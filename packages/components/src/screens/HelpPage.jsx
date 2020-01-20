import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
import getHelpPageComponent from "./common/HelpPage";
import Form from '../molecules/helpPage/helpPageForm';
import PopUp from "../atoms/Popup";
import { collections, account, explore } from "../assets/icons";

class HelpPageMobile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userNeedsHelp: false,
			showForm: true,
			showPopUp: false
		};
	}

	hideForm = () => this.setState({ showForm: false });
	handleHappyToHelpClick = () => {
		const { userNeedsHelp } = this.state;
		if (!userNeedsHelp) this.setState({ userNeedsHelp: true });
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
		} = this.props;
		const { userNeedsHelp, showForm } = this.state;
		return (
			<SafeAreaView style={styles.topContainer}>
				<View style={styles.container} data-givemepadding={true}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{showForm && (
							<Form
								error={error}
								submitButtonText={submitButtonText}
								helperLineText={helperLineText}
								handleSubmit={handleSubmit}
								bookingIdExists={bookingIdExists}
								handleHelperLineClick={handleHelperLineClick}
								userValidated={userValidated}
								handleRadioClick={e => handleRadioClick(e)}
								selectedFlow={selectedFlow}
								userNeedsHelp={userNeedsHelp}
								errorMessage={errorMessage}
								email={email}
								bookingId={bookingId}
								handleInputChange={(value, component) =>
									handleInputChange(value, component)
								}
								handleBlur={component => handleBlur(component)}
								handleHappyToHelpClick={this.handleHappyToHelpClick}
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