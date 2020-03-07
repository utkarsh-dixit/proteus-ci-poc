import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VoucherDetailScreen from './voucherDetails';
import VoucherSingleCode from './voucherSingleCode'
import { TicketType } from '../../constants/voucherConstants';

export type VoucherNavigationStack = {
    VoucherDetails: { rootTag: number; publicItineraryId: string };
    VoucherSingleCode: { ticketImageUrl: string; ticketType: TicketType; ticketId: string };
    VoucherMultiCode: { ticketUrls: Array<{ ticketImageUrl: string; ticketId: string }> };
    VoucherPrintTicket: { ticketUrls: Array<{ ticketImageUrl: string; ticketId: string }> };
}

const Stack = createStackNavigator<VoucherNavigationStack>()

interface IProps {
    rootTag: number;
    publicItineraryId: string;
}

export default function VoucherStack(props: IProps) {
    const {
        rootTag,
        publicItineraryId
    } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='VoucherDetails' screenOptions={{
                headerTitleStyle: {
                    ...Platform.select({
                        ios: {
                            fontFamily: 'avenir-light',
                            color: '#545454',
                            fontWeight: '200',
                            fontSize: 18
                        },
                        android: {
                            color: 'white',
                            fontSize: 18
                        }
                    })
                },
                headerStyle: {
                    ...Platform.select({
                        ios: {
                            backgroundColor: 'white'
                        },
                        android: {
                            backgroundColor: '#ec1943'
                        }
                    })
                }
            }}>
                <Stack.Screen name="VoucherDetails" component={VoucherDetailScreen} initialParams={{ rootTag: rootTag, publicItineraryId: publicItineraryId }} />
                <Stack.Screen name="VoucherSingleCode" component={VoucherSingleCode} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} 
