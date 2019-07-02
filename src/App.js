<script src="http://localhost:8097"></script>

import React, {Component} from 'react';
import HomeScreen from './component/screen/HomeScreen/HomeScreen';
import AppNavigator from './navigation/navConfig';
console.disableYellowBox = true;

export let navigatorRef;
export default class App extends Component {

  componentDidUpdate() {
    navigatorRef = this.navigator;
  }

  componentWillUnmount() {
    this.navigator = null;
    navigatorRef = null;
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  render() {
    return (
        <HomeScreen />
    );
  }
}

