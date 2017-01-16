import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Login from './components/login';

const ROUTES = {
  login: Login
};

export default class testClass extends Component{
  constructor(props){
    super(props);
  }

  // renderScene(route, navigator){
  //   let Component = ROUTES[route.name];
  //   return <Component route={route} navigator={navigator} />;
  // }
  //
  // render(){
  //   return (
  //             <Navigator
  //               style={ styles.container }
  //               initialRoute={ { name: 'login' } }
  //               renderScene={this.renderScene}
  //               configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
  //             />
  //   );
  // }

  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
        style={{padding: 100}}
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) => {
                 if (route.index === 0) {
                   return null;
                 } else {
                   return (
                     <TouchableHighlight onPress={() => navigator.pop()}>
                       <Text>Back</Text>
                     </TouchableHighlight>
                   );
                 }
               },
               RightButton: (route, navigator, index, navState) =>
                 { return (<Text>Done</Text>); },
               Title: (route, navigator, index, navState) =>
                 { return (<Text>Awesome Nav Bar</Text>); },
             }}
             style={{backgroundColor: 'gray'}}
           />
        }
      />
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
