import React from 'react';
import { TouchableOpacity } from 'react-native';
import ChevronLeft from '../assets/icons/chevron-left.svg'

interface IProps {
    onClick: () => void;
}

export const HeaderBackButton = (props: IProps) => {
    const {
        onClick
    } = props;
    return (
        <TouchableOpacity style={{ paddingLeft: 16 }} onPress={onClick}>
            <ChevronLeft width={16} height={16} />
        </TouchableOpacity>
    )
}
