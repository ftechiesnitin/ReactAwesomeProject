import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import {
  View, Text, TouchableHighlight,
 } from 'react-native';

class appContainer extends Component {
  addRecipe(){
    console.log('I in container');
    this.props.addRecipe();
  }

  render() {
    return <View>
            <Text style={{marginTop: 20}}>
              MY FIRST REACT_NATIVE APP. Property Count: {this.props.recipeCount}
            </Text>
            <TouchableHighlight onPress={() => { this.addRecipe() }} >
              <Text>
                Add Recipe
              </Text>
            </TouchableHighlight>
          </View>
  }
}

// sending actions || dispatching actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    recipeCount: state.recipeCount
  }
}, mapDispatchToProps)(appContainer);
