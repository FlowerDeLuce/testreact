import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import PropTypes from 'prop-types';
// import DeviceInfo from 'react-native-device-info';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import QuestionContent from '../../common/QuestionContent/QuestionContent';

import styles from './QuestionScreenStyle';

// let DeviceNew = DeviceInfo.getDeviceType()

class QuestionScreen extends Component {

  static propTypes = {
    DeviceNew: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <QuestionContent />
        <Footer />
      </View>
    );
  }
}

export default QuestionScreen;