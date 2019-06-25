import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import ChatRoom from './ChatRoom.js'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const style = {margintop: -5};

export default class Message extends React.Component {

  render() {
    return (
      <div className="Message">
        {this.props.message.my_name == this.props.message.user_name ? (
          <div className="MyText">
            <List>
              <ListItem disabled="true">
                <div className="msg-dtl">
                  <Chip style={styles.chip} >
                    {this.props.message.text}
                  </Chip>
                </div>
                <span style={{marginBottom: -5}}>@{this.props.message.user_name}</span>
              </ListItem>
            </List>
          </div>
        ):(
          <div className="Text">
            <List>
              <ListItem disabled="true">
                <div className="msg-dtl">
                  <Chip style={styles.chip} >
                    {this.props.message.text}
                  </Chip>
                </div>
                <span style={{marginBottom: -5}}>@{this.props.message.user_name}</span>
              </ListItem>
            </List>
          </div>
        )}
      </div>
    );
  }
}
