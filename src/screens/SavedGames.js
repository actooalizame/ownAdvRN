import React, { Component } from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
import { Container,Text, List, ListItem, Body,Right,Button,Toast,Left,Icon} from 'native-base';
import Meteor, { MeteorListView } from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');
import moment from 'moment';

export default class savedGames extends Component {

  constructor(props) {
    super(props);
  }

  loadGame(lastStep,savedId){
    const {navigation} = this.props,
          deviceId = DeviceInfo.getUniqueID(),
          toastStyle = {fontSize: 18, marginLeft:(Dimensions.get('window').width/4)};
    reactive.set("pageCode", lastStep)
    navigation.push('LoadedScreen',{
            deviceId,
            pageCode: lastStep
          });
    Meteor.call('deleteSavedGame',savedId);
    Toast.show({
      text: 'Pagina Cargada!',
      //buttonText: 'Okasss',
      //position: 'top',
      textStyle: toastStyle,
      type: 'success',
      duration: 1500
    })

  }

  displayIcon(){
    return (
      <Icon type="FontAwesome" name="check" style={{color:'green'}}/>
      )
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
            <List style={styles.instructions}>
              <ListItem>
               <Left>
                  <Text>Puedes acumular hasta 3 partidas guardadas.</Text>
                </Left>
                <Right>
                  {this.displayIcon()}
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Cargar una partida elimina el checkpoint.</Text>
                </Left>
                <Right>
                  {this.displayIcon()}
                </Right>
              </ListItem>
              
              <ListItem>
                <Left>
                  <Text>Guardar más de 3 partidas eliminará la partida guardada más antigua.</Text>
                </Left>
                <Right>
                  {this.displayIcon()}
                </Right>
              </ListItem>
            </List>
            <View style={styles.savedGames}>
              <Text style={styles.savedTitle}>Partidas Guardadas</Text>
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
  },
  instructions: {
    flex: 1
  },
  savedGames: {
    flex: 1,
    //alignItems: 'center'
  },
  savedTitle: {
    marginLeft:(Dimensions.get('window').width/4.7),
    fontSize: 23,
    marginBottom: "5%"
  }
  
});
