import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet  } from 'react-native';
// custom components
import InputBox from '../components/inputBox';

export default class login extends Component {
  constructor(){
    super(props);
    this.state = {
      email: {
        placeHolder: 'Enter Email'
      },
      password: {
        placeHolder: 'Enter Password'
      }
    }
  }
  
  render(){
    return <InputBox {...this.props} />
  }
}
