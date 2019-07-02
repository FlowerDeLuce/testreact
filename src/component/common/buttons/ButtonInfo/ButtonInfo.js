import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity } from 'react-native';
// import FastImage from 'react-native-fast-image';

import styles from './ButtonInfoStyles';
// loading =true
const ButtonInfo = ({
  text
}) => (
    <TouchableOpacity style={styles.wrapperButtonInfo}>
        <Text style={styles.buttonInfo}>
            {text}
        </Text>    
    </TouchableOpacity>
  );

export default ButtonInfo;