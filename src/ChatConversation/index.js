// @ts-check
import React, { Component } from 'react';
import './ChatConversation.css';
import PropTypes from 'prop-types';
import ConversationInput from '../ConversationInput';
import * as firebase from 'firebase/app';

class ChatConversation extends Component {

  constructor() {
    super();
    this.state = {};
    this.ref = null;
  }

  _createMessage(body) {
    return {
      body,
      timestamp: Date.now()
    };
  }

  _saveMessage(message) {
    return firebase.database()
      .ref(`messages/${this.props.chatId}`)
      .push(message)
      .then(data => data.key);
  }

  _addMessage(message, messageId) {
    this.setState({
      [messageId]: message
    });
  }

  _onMessage(messageBody) {
    const message = this._createMessage(messageBody);
    this._saveMessage(message);
  }

  _subscribe(chatId) {
    if (this.ref !== null) {
      this.ref.off();
    }
    this.ref = firebase.database()
      .ref(`messages/${chatId}`)
      .orderByChild('timestamp');

    this.ref.on('child_added', (data) => {
      this._addMessage(data.val(), data.key);
    });
  }

  componentWillMount() {
    this._subscribe(this.props.chatId);
  }

  componentWillReceiveProps({ chatId }) {
    this.state = {};
    this.setState({});
    this._subscribe(chatId);
  }

  render() {
    console.log(this.state);
    return (
      <div className="chat-conversation-container">
        <div className="chat-conversation-body">
          <ul style={{margin: 0}}>
            {Object.keys(this.state).map((messageId) => <li key={messageId}>{this.state[messageId].body}</li>)}
          </ul>
        </div>
        <ConversationInput onMessage={this._onMessage.bind(this)} />
      </div>
    )
  }
}

ChatConversation.propTypes = {
  chatId: PropTypes.string.isRequired
};

export default ChatConversation;