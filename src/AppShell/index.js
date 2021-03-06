// @ts-check
import React, { Component } from 'react';
import App from '../App';
import Login from '../Login';
import * as firebase from 'firebase/app';
import 'firebase/database';
import PropTypes from 'prop-types';

class AppShell extends Component {
  render() {
    return (
       <Login />

    )
  }
}

AppShell.childContextTypes = {
  currentUser: PropTypes.object
}

export default AppShell;
