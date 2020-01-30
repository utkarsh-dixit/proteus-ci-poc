import React from 'react';
import Search from '../../molecules/helpPage/helpPageSearch';
import Listicles from '../../molecules/helpPage/helpPageListics';
import HelpStrip from '../../molecules/helpPage/helpPageStrip';
import { HELP_PAGE } from './Constants/constants';
import { checkEmail } from '../../util/validationUtil';
import UrlUtils from '../../util/urlUtils';

const getHelpPageComponent = UserReservationHelpComponent => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.initialState = {
                email: '',
                bookingId: '',
                error: {
                    email: false,
                },
                bookingIdExists: true,
                userValidated: false,
                selectedFlow: '',
                errorMessage: '',
                retrievingBookingDetails: false
            };
            this.state = this.initialState;
        }

        getSubmitButtonText = () => {
            const { bookingIdExists, selectedFlow, userValidated } = this.state;
            if (
                selectedFlow === HELP_PAGE.BOOKING_FLOW.RESEND ||
                !bookingIdExists
            )
                return `Resend tickets`;
            if (userValidated) return `Start Chat`;
            return `Get help`;
        };

        getHelperLineText = () => {
            const { bookingIdExists, userValidated } = this.state;
            if (!bookingIdExists) return `I have a booking ID`;
            else if (bookingIdExists && !userValidated)
                return `I don't have a booking ID`;
            return `Start again`;
        };

        handleHelperLineClick = () => {
            console.log("Handle ")
            const { userValidated } = this.state;
            return userValidated
                ? this.resetStateToInitial()
                : this.setState({
                    bookingIdExists: !this.state.bookingIdExists,
                    errorMessage: '',
                });
        };

        handleInputChange = (value, component) => {
            switch (component) {
                case HELP_PAGE.INPUT.EMAIL:
                    this.setState({ email: value });
                    break;
                case HELP_PAGE.INPUT.BOOKINGID:
                    this.setState({ bookingId: value });
                    break;
                default:
                    return;
            }
        };

        sendTicketToUser = () => {
            //Resend tickets to user
            const { email } = this.state;
            const customVariables = [
                { name: 'email', value: email },
                { name: 'action', value: HELP_PAGE.BOOKING_FLOW.RESEND },
            ];

            //Open chat
            // this.openChatWithCustomVariables(customVariables);
            this.resetStateToInitial();
            return null;
        };

        sendStartChatEvents = () => {
            const { selectedFlow } = this.state;
        };


        sendErrorViewedEvent = errorMessage => {

        };

        showError = errorMessage => {
            this.setState(
                {
                    errorMessage,
                },
                () => this.sendErrorViewedEvent(errorMessage),
            );
        };

        sendHelpButtonClickedEvent = () => {

        };

        handleSubmit = async () => {
            const {
                error,
                userValidated,
                selectedFlow,
                bookingIdExists,
                email,
                bookingId,
            } = this.state;
            
            if (!userValidated) {
                if (error.email || !email) {
                    this.showError(`Please enter a correct email`);
                    return null;
                }
                if (!bookingIdExists) {
                    this.sendTicketToUser();
                    return null;
                }
                if (!bookingId) {
                    this.showError(`Please enter a booking ID`);
                    return null;
                }
                const options = {
                    method: 'HEAD',
                };
                this.setState({...this.state, retrievingBookingDetails:true});
                url = `${UrlUtils.getApiBaseUrl()}/api/v5/booking/${bookingId}?emailId=${email}`;
                console.log("Fetching: ", url);
                const response = await fetch(url,options);

                const resCode = response.status;
                this.setState({...this.state, retrievingBookingDetails:false});
                if (resCode === 404 || resCode === 422 || resCode === 400) {
                    this.showError(
                        `That email and booking ID combination didn't work. Try again.`,
                    );
                    return null;
                }
                if (resCode === 200) {
                    this.sendHelpButtonClickedEvent();
                    this.setState({ userValidated: true, errorMessage: '' });
                }
                return null;
            }
            if (!selectedFlow && userValidated) {
                this.showError(`Please select an option`);
                return null;
            }
            if (selectedFlow === HELP_PAGE.BOOKING_FLOW.RESEND) {
                this.sendTicketToUser();
            }
            const customVariables = [
                { name: 'email', value: email },
                { name: 'bookingId', value: bookingId },
                { name: 'action', value: selectedFlow },
            ];
            //Initialise Chat Bot With Email, Password and Selected flow
            // this.openChatWithCustomVariables(customVariables);
            return null;
        };

        handleRadioClick = value => {
            this.setState({ selectedFlow: value, errorMessage: '' });
        };

        resetStateToInitial = () => {
            this.setState(this.initialState);
        };

        handleBlur = component => {
            const { email, bookingId } = this.state;
            switch (component) {
                case HELP_PAGE.INPUT.EMAIL: {
                    if (checkEmail(email) || !email) {
                        this.setState({
                            ...this.state,
                            errorMessage: '',
                            error: {
                                email: false,
                            },
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            error: {
                                email: true,
                            },
                        });
                        this.showError(`Please enter a correct email`);
                    }
                    break;
                }
                case HELP_PAGE.INPUT.BOOKINGID: {
                    if (bookingId) {
                        this.setState({
                            errorMessage: ``,
                        });
                    } else {
                        this.showError(`Please enter a Booking ID`);
                    }
                    break;
                }
                default:
                    break;
            }
        };

        render() {
            const {
                bookingIdExists,
                userValidated,
                selectedFlow,
                errorMessage,
                email,
                existingReservationFlowVisible,
                bookingId,
                retrievingBookingDetails
            } = this.state;

            return (
                <>
                    <UserReservationHelpComponent
                        error={this.state.error}
                        submitButtonText={this.getSubmitButtonText()}
                        helperLineText={this.getHelperLineText()}
                        handleSubmit={this.handleSubmit}
                        bookingIdExists={bookingIdExists}
                        handleHelperLineClick={this.handleHelperLineClick}
                        userValidated={userValidated}
                        handleRadioClick={e => this.handleRadioClick(e)}
                        selectedFlow={selectedFlow}
                        errorMessage={errorMessage}
                        email={email}
                        bookingId={bookingId}
                        handleInputChange={(val, component) =>
                            this.handleInputChange(val, component)
                        }
                        handleBlur={component => this.handleBlur(component)}
                        existingReservationFlowVisible={existingReservationFlowVisible}
                        retrievingBookingDetails={retrievingBookingDetails}
                    >
                    <Search />
                    <Listicles data={HELP_PAGE.LISTICLES} openListicleAction={this.props.openListicle}/>
                    <HelpStrip />
                    </UserReservationHelpComponent>
                </>
            );
        }
    };
};

export default getHelpPageComponent;
