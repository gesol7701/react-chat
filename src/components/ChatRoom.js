import React, { Component } from 'react';
import { firebaseDb } from './../firebase/index.js'
import Message from './Message.js'
import ChatBox from './ChatBox.js'
import Top from './Top.js'
import '../css/index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const messagesRef = firebaseDb.ref('messages')

class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      text : "",
      user_name: "",
      messages : []
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {!this.props.location.state && (
            <div className="App-header">
              <h4>書き込むには入室してください <Link to='/enter'>入室</Link></h4>
            </div>
          )}
          <div className="App-header">
            <h2>チャット</h2>
          </div>
          <div className="MessageList">
            {this.state.messages.map((m, i) => {
              return <Message key={i} message={m} />
            })}
          </div>
          <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }

  onTextChange(e) {
    if (e.target.name == 'text') {
      this.setState({
        "text": e.target.value,
      });
    }
  }

  onButtonClick() {
    if(this.state.text == "") {
      alert('テキストを入力してください')
      return
    }
    if(!this.props.location.state) {
      alert('名前を入力し入室してください')
      return
    }
    messagesRef.push({
      "user_name" : this.props.location.state.user_name,
      "text" : this.state.text,
    })
  }

  componentWillMount() {
    messagesRef.on('child_added', (snapshot) => {
      const m = snapshot.val()
      let msgs = this.state.messages
      if(!this.props.location.state) {
        msgs.push({
          'text' : m.text,
          'user_name' : m.user_name,
          'my_name' : "",
        })
      } else {
        msgs.push({
          'text' : m.text,
          'user_name' : m.user_name,
          'my_name' : this.props.location.state.user_name,
        })
      }

      this.setState({
        messages : msgs
      });
    })
  }

}

export default ChatRoom;
