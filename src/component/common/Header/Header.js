import React from 'react';
import PropTypes from 'prop-types';
import {View, Image } from 'react-native';
// import FastImage from 'react-native-fast-image';

import styles from './HeaderStyles';
// loading =true
const Header = ({
  type,
  loading,
  bgColor,
  handler,
  ...rest
}) => (
    <View style={styles.wrapperHeader}>
        <Image
          style={styles.imageLogo}
          source={require('../../../images/logo.png')}
        />

        <Image
          style={styles.imageEmily}
          source={require('../../../images/Emily_Center_Logo.png')}
        />
    
    </View>
  );

  export default Header;