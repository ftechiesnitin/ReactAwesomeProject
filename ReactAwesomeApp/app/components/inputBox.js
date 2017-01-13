import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet  } from 'react-native';

export default class inputBox extends Component {
  constructor(props){
    super(props);
    this.state = { text: '' };
  }

  render(){
    console.log(this.props);
    return <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  input: {
    height: 50,
    padding: 12,
    margin: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4
  }
});
