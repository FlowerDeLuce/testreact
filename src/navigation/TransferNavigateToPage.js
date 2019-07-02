/**
 * This HOC sends taken navigation to taken Component.
 * This is way to replace current tab navigation to main navigation.
 * */

import React, { Component } from 'react';

/**
 * @param {element} WrappedComponent
 * @param {object} navigation
 */
function TransferNavigateToPageHOC(WrappedComponent, navigation ) {
  return class NavigateToPage extends Component {
    _getNavigation = () => {
      if (navigation) {
        return navigation;
      } else if (this.props.navigation) {
        return this.props.navigation;
      }
      return null;
    };

    render() {
      return <WrappedComponent {...this.props} navigation={this._getNavigation()}/>;
    }
  };
}

export default TransferNavigateToPageHOC;
