import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text, Image, Platform } from "react-native";
import Search from "../molecules/helpPage/helpPageSearch";
import getHelpPageComponent from "./common/HelpPage";
import Form from '../molecules/helpPage/helpPageForm';
import PopUp from "../atoms/Popup";
import HeadBar from "../molecules/headbar";
import Footer from "../molecules/footer";
import { calendar, camera, collections, account, explore } from "../assets/icons";

class HelpPageMobile extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			userNeedsHelp: false,
			showForm: true,
			showPopUp: false
		};
		this.footerNav = [{ id: "1", icon: explore, text: "Explore" }, { id: "2", icon: collections, text: "Collections" }, { id: "3", icon: account, text: "Account" }];
	}

	hideForm = () => this.setState({ showForm: false });
	handleHappyToHelpClick = () => {
		const { userNeedsHelp } = this.state;
		// alert("Triggered");
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
				<HeadBar />
				<View style={styles.container}>
					<ScrollView>
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
				<Footer items={this.footerNav} active={"1"}/>
			</SafeAreaView>
		);
	}
}
const HelpPage = getHelpPageComponent(HelpPageMobile);
// console.log(HelpPage, "Object");
export default HelpPage;

export const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	container: {
		position: "relative",
		paddingLeft: 16,
		paddingRight: 16,
		flex: 1
	}
});