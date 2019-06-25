import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ChatBox extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="ChatBox">
          <TextField rows="1" multiLine="true" name='text' className="" onChange={this.props.onTextChange} />
          <RaisedButton primary="true" label="Send" className="" onClick={this.props.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}
