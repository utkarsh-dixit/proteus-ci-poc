import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet} from "react-native";
import { deletePropertiesFromObject, isDefined } from "../util/helpers";
var classNames = require('classnames');

const ImageComponent = (props) => {

    const { tailwind, height, width,fit } = props;

    return (
        <Image className={tailWindClass} {...clonedProps}/>
    )

}

export default ImageComponent;