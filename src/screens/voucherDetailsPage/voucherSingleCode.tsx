import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { VoucherDetailsNavigationProp } from './voucherDetails';
import { HeaderBackButton } from '../../atoms/headerBackButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { VoucherNavigationStack } from './voucherNavigation';
import { RouteProp } from '@react-navigation/native';
import VoucherTicketType from './components/voucherTicketType';

type VoucherSingleCodeNavigationProp = StackNavigationProp<VoucherNavigationStack, 'VoucherSingleCode'>
type VoucherSingleCodeRouteProp = RouteProp<VoucherNavigationStack, 'VoucherSingleCode'>

interface IProps {
    navigation: VoucherDetailsNavigationProp;
    route: VoucherSingleCodeRouteProp;
}

export default class VoucherSingleCode extends React.PureComponent<IProps> {

    constructor(props) {
        super(props)
        const {
            navigation
        } = this.props;
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <HeaderBackButton onClick={() => {
                    navigation.pop()
                }} />
            )
        })
    }

    render() {
        const {
            route
        } = this.props;
        const {
            ticketImageUrl,
            ticketId,
            ticketType
        } = route.params;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 4, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: ticketImageUrl }} style={styles.ticketImageStyle} />
                    <Text style={{ fontFamily: 'avenir-roman', fontSize: 16, color: '#444444', paddingTop: 16 }}>#{ticketId}</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', width: '100%', flexDirection: 'column', flex: 1, paddingBottom: 56 }}>
                    <VoucherTicketType ticketType={ticketType} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ticketImageStyle: {
        height: 200,
        width: '80%',
        resizeMode: 'contain'
    }
})
