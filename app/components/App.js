import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {
 StyleSheet,
 Text,
 View
} from 'react-native';

import Login from './Login';

var Main = React.createClass({
  getInitialState() {
    return{}
  },
  render() {
    return (
      <Login />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

var mapStateToProps = (state) => {
  return state
}


module.exports = connect(mapStateToProps)(Main);
