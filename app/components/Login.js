import React from 'react';
import {reduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// import { reducer as formReducer } from 'redux-form'
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

var Login = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    }
  },
  onSignIn: function() {
    var {email, password} = this.props.fields;
    console.log(email.value, password.value);
  },
  render() {
    var {fields: {email, password}} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            To-Do
          </Text>
        </View>
        <View style={styles.field}>
          <TextInput
            {...email}
            placeholder="Email"
            style={styles.textInput}/>
        </View>
        <View style={styles.field}>
          <TextInput
            {...password}
            placeholder="Password"
            style={styles.textInput}/>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.button} onPress={this.onSignIn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#aaa'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35
  },
  field: {
    color: 'white',
    padding: 5,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  }
});

var validate = (formProps) => {
  var errors = {};
  return errors;
}

module.exports = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login);
