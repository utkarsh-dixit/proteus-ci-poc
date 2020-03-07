import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { VoucherNavigationStack } from './voucherNavigation';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { VoucherHeader } from './components/voucherHeader';
import { HeaderBackButton } from '../../atoms/headerBackButton';

type VoucherMultiCodeNavigationProp = StackNavigationProp<VoucherNavigationStack, 'VoucherMultiCode'>;
type VoucherMultiCodeRouteProp = RouteProp<VoucherNavigationStack, 'VoucherMultiCode'>;

interface IProps {
    navigation: VoucherMultiCodeNavigationProp;
    route: VoucherMultiCodeRouteProp;
}

export default class VoucherMultiCode extends React.PureComponent<IProps> {

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
            ticketUrls
        } = route.params;
        const {
            ticketType
        } = route.params
        return (
            <ScrollView style={{ paddingLeft: 16, paddingRight: 16, backgroundColor: 'white', paddingTop: 16 }}>
                <VoucherHeader ticketType={ticketType} />
                {
                    ticketUrls.map((item) => {
                        return (
                            <View style={styles.ticketContainer}>
                                <Image source={{ uri: item.ticketImageUrl }} style={styles.ticketImage} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    ticketContainer: {
        height: 172,
        borderRadius: 4,
        borderWidth: 1,
        marginTop: 8,
        marginBottom: 8,
        borderColor: '#e2e2e2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ticketImage: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
        paddingLeft: 28,
        paddingRight: 28
    }
})
