import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Enter extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Enter">
          <TextField multiLine="true" name='user_name' placehplder="名前を入力" className="" value={this.props.value} onChange={this.props.onUserNameSet} />
          <RaisedButton primary="true" label="Send" className="" onClick={this.props.enterlingTheRoom} />
        </div>
      </MuiThemeProvider>
    );
  }
}
