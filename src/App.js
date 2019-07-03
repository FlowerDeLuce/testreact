<script src="http://localhost:8097"></script>

import React, {Component} from 'react';
import HomeScreen from './component/screen/HomeScreen/HomeScreen';
import { Provider, connect } from 'react-redux';
import AppNavigator from './navigation/navConfig';
import { addNavigationHelpers } from 'react-navigation'
console.disableYellowBox = true;

export let navigatorRef;
class App extends Component {

  componentDidUpdate() {
    navigatorRef = this.navigator;
  }

  componentWillUnmount() {
    this.navigator = null;
    navigatorRef = null;
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  render() {
      const { dispatch, nav } = this.props
      const navigation = addNavigationHelpers({
          dispatch,
          state: nav
      })
      return <AppNavigator navigation={navigation} />
  }
}

const mapStateToProps = ({ nav }) => ({ nav })

const RootNavigationStack = connect(mapStateToProps)(App);

const Root = () => (
    <Provider >
        <RootNavigationStack />
    </Provider>
)
export default Root