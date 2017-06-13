import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture';
import * as firebase from 'firebase/app';

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'kobi',phoneNumber:''};
    // this.validateName = this.validateName.bind(this);
    // this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getInitialState() {
   return {
     name: '',
     phoneNumber: ''
   };
 }
 handleChange(e) {
   //this.setState({e.target.name: e.target.value});
   let stateName = e.target.name;
   let stateVal = e.target.val;
   this.setState({stateName: stateVal});
   if (this.state.name.length>0 && this.state.phoneNumber.length>0){
      //enable button
   }

    //this.state.newVal(e.target.value);
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
            onChange={this.handleChange}
            />
          </p>
          <p>
            <input name="name"
            id="name"
            className="login-credentials"
            type="text"
            placeholder="Enter your name"
            onChange={this.handleChange}/>
          </p>
          <button className="button button-big login-button" onClick={this.login} disabled={!this.state.name.length>=0}>Login</button>
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
    console.log("logging..");
  }



}
export default LoginDialog
