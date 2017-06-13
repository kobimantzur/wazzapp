import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture';
import * as firebase from 'firebase/app';

class LoginDialog extends Component {
  render(){
    return(
      <div>
        <div className="login-dialog-container">
          <h3 className="login-dialog-title">WazzApp</h3>
          <p className="login-dialog-subtitle">Use WazzApp, create your profile picture and enter your name</p>
          <p>
            <input className="login-credentials" type="tel" placeholder="Enter your phone number" pattern="[0-9]"/>
          </p>
          <p>
            <input className="login-credentials" type="text" placeholder="Enter your name"/>
          </p>
          <button className="button button-big login-button" disabled>Login</button>
        </div>
        <div className="login-dialog-validations">
          <ol>
            <li>Capture your profile image</li>
            <li>Missing phone number</li>
            <li>Missing Username</li>
          </ol>
        </div>
      </div>
    );
  }
}
export default LoginDialog
