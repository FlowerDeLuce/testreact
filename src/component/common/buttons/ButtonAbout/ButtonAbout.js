import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity } from 'react-native';
// import FastImage from 'react-native-fast-image';

import styles from './ButtonAboutStyle';
// loading =true
const ButtonAbout = ({
  text
}) => (
    <TouchableOpacity style={styles.wrapperButtonAbout}>
        <Text style={styles.buttonAbout}>
            {text}
        </Text>    
    </TouchableOpacity>
  );

export default ButtonAbout;