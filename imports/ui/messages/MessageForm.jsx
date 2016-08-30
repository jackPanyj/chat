import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import Radium from 'radium';
import { Messages } from '../../api/messages.js';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  getStyles() {
    return {
      card: {
        padding: '20px 10px',
        flexShrink: 0,
      },
      form: {
        textAlign: 'center'
      },
      textField: {
        marginRight: '5px',
        transition: 'none',
        height: '45px',
        width: '80%'
      },
      textarea: {
        marginBottom: '-32px'
      },
      label: {
        fontWeight: '600',
        fontSize: '14px',
        padding: '0 12px',
      }
    };
  }

  handleChange(e) {
    this.setState({inputValue: this.refs.message.getValue()})
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.refs.message.getValue();
    const currentUser = this.props.currentUser;
    const username = currentUser.username;
    const avatar_url = currentUser.avatar_url;
    Meteor.call('insert/message', username, avatar_url, message, (err) => {
      err ? console.log(err) : this.setState({inputValue: ''})
    })
  }

  render() {
    let styles = this.getStyles();
    return (
      <Card style={styles.card}>
        <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            style={styles.textField}
            textareaStyle={styles.textarea}
            hintText="说点儿什么"
            ref = 'message'
            value = {this.state.inputValue}
            onChange = {this.handleChange.bind(this)}
            multiLine={true} />
          <RaisedButton
            labelStyle={styles.label}
            type="submit"
            label="发送"
            secondary={true} />
        </form>
      </Card>
    );
  }
}
export default Radium(MessageForm);
