import React, { Component } from 'react';
import { firebaseDb } from './../firebase/index.js'
import TextField from 'material-ui/TextField';
import Enter from './Enter';
import { Redirect } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Top extends Component {
  constructor(props) {
    super(props);
    this.onUserNameSet = this.onUserNameSet.bind(this)
    this.enterlingTheRoom = this.enterlingTheRoom.bind(this)
    this.state = {
      user_name: "",
      fireRedirect: false
    }
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>入室</h2>
          </div>
          <Enter onUserNameSet={this.onUserNameSet} enterlingTheRoom={this.enterlingTheRoom} />
        </div>
        {fireRedirect && (
          <Redirect to={{ pathname: '/',state: { user_name: this.state.user_name }}}/>
        )}
      </MuiThemeProvider>
    );
  }

  onUserNameSet(e) {
    if(e.target.name == 'user_name') {
      this.setState({
        "user_name": e.target.value
      });
    }
  }

  enterlingTheRoom() {
    if(this.state.user_name == "") {
      alert('名前を入力してください')
      return
    }
    this.setState({ fireRedirect: true });
  }
}

export default Top;
