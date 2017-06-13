import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture';
import * as firebase from 'firebase/app';

class LoginDialog extends Component {
render(){
  return(
    <div>
    <h1>WazzApp</h1>
    <h4>Use WazzApp, create your profile picture and enter your name</h4>
    <input  type="text" placeholder="Enter your phone number"/>
    <input type="text" placeholder="Enter your name"/>
    </div>
  );
}

}
export default LoginDialog
