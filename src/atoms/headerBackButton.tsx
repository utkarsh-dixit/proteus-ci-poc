import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import ChevronLeft from '../assets/icons/chevron-left';
import ArrowLeft from '../assets/icons/arrow-left';
import { Conditional } from './conditional';

interface IProps {
    onClick: () => void;
}

export const HeaderBackButton = (props: IProps) => {
    const {
        onClick
    } = props;
    return (
        <TouchableOpacity style={{ paddingLeft: 16 }} onPress={onClick}>
            <Conditional if={Platform.OS === 'ios'}>
                <ChevronLeft width={20} height={20} stroke={'#444444'} />
            </Conditional>
            <Conditional if={Platform.OS === 'android'}>
                <ArrowLeft width={20} height={20} stroke={'white'} />
            </Conditional>
        </TouchableOpacity>
    )
}
