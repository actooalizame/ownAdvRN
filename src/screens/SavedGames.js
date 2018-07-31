import React, { Component } from 'react';
import { Container,Text, List, ListItem, Body,Right,Button, H3} from 'native-base';
import {StyleSheet,View} from 'react-native';
import Meteor, { MeteorListView } from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');
import moment from 'moment';

export default class savedGames extends Component {

  constructor(props) {
    super(props);
  }

  loadGame(lastStep,savedId){
    const {navigation} = this.props;
    const deviceId = DeviceInfo.getUniqueID();
    reactive.set("pageCode", lastStep)
    navigation.push('LoadedScreen',{
            deviceId,
            pageCode: lastStep
          });
    Meteor.call('deleteSave',savedId);
    
  }

  renderRow(saveGame) {
    const lastStep = saveGame.lastStep,
          formattedDate = moment(saveGame.createdAt).format('DD/MM/YY HH:mm'),
          savedId = saveGame._id;
    return (
      <List>
        <ListItem onPress={() => 
          this.loadGame(lastStep,savedId)
        }>
          <Body>
            <View> 
              <Text>{formattedDate}</Text>
            </View>
          </Body>
          <Right>
            
            
              <Text>
                {lastStep}
              </Text>
           
              
            
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
            <H3>Cargar una partida eliminara el checkpoint</H3>

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
