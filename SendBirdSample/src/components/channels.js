import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import SendBird from 'sendbird';

const PULLDOWN_DISTANCE = 40;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const sb = new SendBird({ 
  appId: '596233CE-7AD5-4B6B-843D-5E15CAC23C67' 
}); 

export default class channels extends Component {
  constructor(props){
    super(props);

    this.state = { channelList: ds.cloneWithRows([]), searching: true };
  }

  componentWillMount(){
    this.getChannelList(1);
  }

  getChannelList(page){
    if(page == 0) return;

    let openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();

    openChannelListQuery.next( (response, error) => {
      if(error) return;

      this.setState({ channelList: ds.cloneWithRows(response), searching: false });
    });
  }

  onChannelPress(url){
    sb.OpenChannel.getChannel(url, (channel, error) => {
      if(error) return;

      channel.enter( (response, error) => {
        if(error) return;

        this.props.navigator.push({ name: 'chat' });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <ListView
            dataSource={this.state.channelList}
            renderRow={ rowData => (
                <TouchableHighlight onPress={() => this.onChannelPress(rowData.url)}>
                  <View style={styles.listItem}>
                    <View style={styles.listIcon}>
                      <Image style={styles.channelIcon} source={{uri: rowData.coverUrl}} />
                    </View>
                    <View style={styles.listInfo}>
                      <Text style={styles.titleLabel}># {rowData.name}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff'
  },
  listContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 20
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8fc',
    borderBottomWidth: 0.5,
    borderColor: '#D0DBE4',
    padding: 5
  },
  listIcon: {
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 15
  },
  channelIcon: {
    width: 50,
    height: 50
  },
  listInfo: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  titleLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#60768b',
  },
  memberLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#abb8c4',
  }
});
