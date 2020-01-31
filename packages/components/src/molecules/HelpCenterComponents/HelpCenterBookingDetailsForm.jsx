import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import FormInputTextField from '../../atoms/common/FormInputTextField'
import Button from '../../atoms/common/Button';
import { StyleSheet } from 'react-native';

export const BookingDetailError = {
    INVALID_EMAIL: {title: 'Please enter a valid email address.'},
    INVALID_BOOKING_ID: {title: 'Please enter the booking ID.'}
}

export default class HelpCenterBookingDetailsForm extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            bookingId: '',
            bookingEmail: ''
        }
    }

    onDoneClick = () => {
        this.props.onDoneClick(this.state.bookingId, this.state.bookingEmail);
    }

    render() {
        const {
            style,
            showLoadState,
            emailError,
            bookingIdError
        } = this.props;
        return (
            <View style={style}>
                <FormInputTextField style={{paddingTop:16, paddingBottom:16}}
                    title='Email'
                    value={this.bookingEmail}
                    placeholder='Enter booking email address'
                    errorText={emailError ? BookingDetailError.INVALID_EMAIL.title : null} 
                    keyboardType='email-address'
					autoCapitalize='none'
					returnKeyType='done'
                    onChangeText={(email) => {
                        this.setState({...this.state, bookingEmail:email})
                    }}/>
                <FormInputTextField style={{paddingTop:16, paddingBottom:16}}
                    title='Booking ID'
                    subTitle='Please check the confirmation email from Headout'
                    value={this.bookingEmail}
                    placeholder='XXX-XXXX'
                    errorText={bookingIdError ? BookingDetailError.INVALID_BOOKING_ID.title : null} 
                    keyboardType='number-pad'
					autoCapitalize='none'
					returnKeyType='done'
                    onChangeText={(bookingId) => {
                        this.setState({...this.state, bookingId:bookingId})
                    }}/>
                    { showLoadState ? (
                        <View style={styles.buttonContainer}>
                            <ActivityIndicator color='white'/>
                        </View>
                    ) : (
                        <Button style={styles.buttonContainer} title='Get Help' onClick={this.onDoneClick}/>
                    )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        height:48, 
        width:164, 
        marginTop:8,
        alignContent:'center',
        justifyContent:'center', 
        backgroundColor:'#24a1b2', 
        borderRadius:2
    }
})