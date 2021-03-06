import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';

import Login from './components/login';
import Channels from './components/channels';
import Chat from './components/chat';

const ROUTES = {
  login: Login,
  channels: Channels,
  chat: Chat
};

export default class testClass extends Component{
  constructor(props){
    super(props);
  }

  renderScene(route, navigator){
    let Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render(){
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ { name: 'login' } }
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
