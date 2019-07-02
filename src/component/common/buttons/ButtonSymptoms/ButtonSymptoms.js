import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity } from 'react-native';
// import FastImage from 'react-native-fast-image';

import styles from './ButtonSymptomsStyle';
// loading =true
const ButtonSymptoms = ({
  text
}) => (
    <TouchableOpacity style={styles.wrapperButtonSymptoms}>
        <Text style={styles.buttonSymptoms}>
            {text}
        </Text>    
    </TouchableOpacity>
  );

export default ButtonSymptoms