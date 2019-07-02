import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
// import DeviceInfo from 'react-native-device-info';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import MainContainer from '../../common/MainContainer/MainContainer';

import styles from './HomeScreenStyle';

// let DeviceNew = DeviceInfo.getDeviceType();

class HomeScreen extends Component {

  static propTypes = {
    DeviceNew: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MainContainer />
        <Footer />
      </View>
    );
  }
}

export default HomeScreen;