import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TextInput, Image, TouchableHighlight, StyleSheet  } from 'react-native';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = { searchKey: '' };
  }
  searchPressed(){
    this.setState({searching: true});
    this.props.fetchRecipe({ searching: false, searchKey: this.state.searchKey  }).then(() => {
      this.setState({searching: false});
    });
  }

  recipes(){
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key]);
  }

  render(){
    return <View style={styles.scene}>
            <View style={styles.searchSection}>
              <TextInput style={styles.seachInput}
                returnKeyType='search'
                placeholder='Search Something Funny'
                onChangeText={ (searchKey) => this.setState({searchKey}) }
                value={ this.state.searchKey }
              />
              <TouchableHighlight onPress={ () => this.searchPressed() } style={styles.searchButton}>
                <Text>SEARCH</Text>
              </TouchableHighlight>
            </View>
            <ScrollView style={styles.container}>
              {!this.state.searching && this.recipes().map( (recipe, i) => {
                return <View key={i} style={styles.gifContainer}>
                  <Image source={{ uri: recipe.images.original.url }} style={styles.gifImage} />
                </View>
              })}
              { this.state.searching ? <Text>SEARCHING......</Text> : null }
            </ScrollView>
          </View>
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    height: 40,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    padding: 5,
    flexDirection: 'row'
  },
  seachInput: {
    flex: 0.8,
    paddingRight: 10,
  },
  scrollSection: {
    flex: 0.8
  },
  searchButton: {
    flex: 0.2,
    margin: 0,
    paddingLeft: 10,
  },
  container: {

  },
  gifContainer:{
    flex: 0.7,
    paddingBottom: 8,
    paddingRight: 10,
    paddingLeft: 10
  },
  gifImage: {
    height: 180
  }
});

function mapStateToProps(state){
  return {
    searchedRecipes: state.searchedRecipes
  };
}

export default connect(mapStateToProps)(Home);
