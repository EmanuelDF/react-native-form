import React, { Component } from 'react';
import { ScrollView, Button, StyleSheet } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.maybe(t.String),
  message: t.String
});

const options = {
  fields: {
    name: {
      error: 'Inform your name.'
    },
    email: {
      error: 'Inform your email address.'
    },
    message: {
      error: 'Leave some message.'
    },
  },
};

export default class Contact extends Component {
  handleSubmit = async () => {
    const value = this._form.getValue();
  
    if (value) {
      var object = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          "nameForm": value.name,
          "emailForm": value.email,
          "phoneForm": value.phone,
          "messageTx": value.message
        })
      };
  
      fetch('URL', object)
        .then((response) => response.text()) 
        .then(alert('Your registration was successful.'))
        .then(this.props.navigation.navigate('Home'))
        .catch(function(err) {
          alert('A problem occurred with your registration. Please try again. Error: ' + err)
        }
      );
    }

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Form ref={(c) => {this._form = c;}} type={User} options={options} />
        <Button title="Submit" onPress={this.handleSubmit} />
      </ScrollView>
    );
  }
}

Contact.navigationOptions = {
  title: 'Contact',
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
});