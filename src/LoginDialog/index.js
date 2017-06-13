import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture';
import * as firebase from 'firebase/app';

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '',phoneNumber:'',isValidated: false,imageData: null};
    // this.validateName = this.validateName.bind(this);
    // this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getInitialState() {
   return {
     userName: '',
     phoneNumber: '',
     isValidated: false,
     imageData: null
   };
 }
 handleChange(e) {
   //this.setState({e.target.name: e.target.value});
   let stateName = e.target.name;
   let stateVal = e.target.value;
   this.setState({[stateName]: stateVal});
  }
  isValid(){
    if (this.state.userName.length>0 && this.state.phoneNumber.length>0){
       return true;

    }
    return false;
  }
  render(){
    return(
      <div>
        <div className="login-dialog-container">
          <h3 className="login-dialog-title">WazzApp</h3>
          <p className="login-dialog-subtitle">Use WazzApp, create your profile picture and enter your name</p>
          <p>
            <input name="phoneNumber"
            id="phoneNumber"
            className="login-credentials"
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]"
            onChange={this.handleChange.bind(this)}
            />
          </p>
          <p>
            <input name="userName"
            id="userName"
            className="login-credentials"
            type="text"
            placeholder="Enter your name"
            onChange={this.handleChange.bind(this)}/>
          </p>
          <button className="button button-big login-button" onClick={this.login.bind(this)} disabled={!this.isValid()} >Login</button>
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
  login(){
      firebase.initializeApp({
     apiKey: 'AIzaSyC3EaZqKldK4cz9lYGkLHh5NmPvICL-vVQ',
     authDomain: 'wazzapp-4b5cf.firebaseapp.com',
     databaseURL: 'https://wazzapp-4b5cf.firebaseio.com',
     projectId: 'wazzapp-4b5cf',
     storageBucket: 'wazzapp-4b5cf.appspot.com',
     messagingSenderId: '452145776981'
   });
   window.localStorage.setItem('wazzapp-user', JSON.stringify(this.state));
    firebase.database().ref(`users/${this.state.phoneNumber}`).update({
      userName: this.state.userName,
      phoneNumber: this.state.phoneNumber,
      imageData: this.state.imageData
    }).then((res) => {
      console.log(res);
    });
  }



}
export default LoginDialog
