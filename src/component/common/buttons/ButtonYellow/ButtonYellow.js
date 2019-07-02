import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity } from 'react-native';
// import FastImage from 'react-native-fast-image';

import styles from './ButtonYellowStyle';
// loading =true
const ButtonYellow = ({
  text
}) => (
    <TouchableOpacity style={styles.wrapperButtonYellow}>
        <Text style={styles.buttonYellow}>
            {text}
        </Text>    
    </TouchableOpacity>
  );

export default ButtonYellow