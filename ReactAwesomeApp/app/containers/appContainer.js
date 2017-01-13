import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './home';
import Login from './login';

class appContainer extends Component {
  render() {
    // return <Home {...this.props} />
    return <Login />
  }
}

// sending actions || dispatching actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(appContainer);
