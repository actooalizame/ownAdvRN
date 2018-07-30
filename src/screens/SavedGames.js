import React, { Component } from 'react';
import { Container,Text, Content, List, ListItem, Body,Right,Title,Subtitle,Button } from 'native-base';
import {StyleSheet,View} from 'react-native';
import Meteor, { MeteorListView } from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');

export default class savedGames extends Component {

  constructor(props) {
    super(props);
  }

  loadGame(lastStep){
    const {navigation} = this.props;
    const deviceId = DeviceInfo.getUniqueID();
    reactive.set("pageCode", lastStep)
    navigation.push('LoadedScreen',{
            deviceId,
            pageCode: lastStep
          });
    
  }

  renderRow(saveGame) {
    const lastStep = saveGame.lastStep
    return (
      <List>
        <ListItem onPress={() => this.loadGame(lastStep)}>
          <Body>
            <View> 
              <Text>{lastStep}</Text>
            </View>
          </Body>
          <Right>
            <Text>{saveGame.deviceId}</Text>
          </Right>
        </ListItem>
      </List>
      )
  }
 


  render() {
    let {savesReady} = this.props;
    const deviceId = DeviceInfo.getUniqueID();
    return (
        <Container>
        { savesReady ? 
          <View style={styles.container}>

            <View style={styles.container}>
              <MeteorListView
                enableEmptySections
                collection="savedGames"
                //style={styles.itemsList}
                selector={{deviceId:deviceId}}
                options={{sort: {createdAt: -1}}}
                renderRow={this.renderRow.bind(this)}
              />
            </View>
          </View>
          :
          <Text>nada</Text>       
         }

        
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff'

  },
  
});
