import React, { Component } from 'react';
import { StyleSheet,View,Dimensions } from 'react-native';
import { Button, Text, Toast, H2 } from 'native-base';
import Meteor from 'react-native-meteor';


class StatsScreen extends Component {

	saveGame(deviceId,lastStep){
		const { navigation,playerSaved,oldestSaved } = this.props;

		const playerSavedLastSteps = playerSaved.map((save) =>{
      return save.lastStep
    });

    if(playerSavedLastSteps.includes(lastStep)){
    	Toast.show({
	      text: 'Ya guardaste esta pagina!',
	      textStyle: {fontSize: 18, marginLeft:(Dimensions.get('window').width/5)},
	      type: 'danger',
	      duration: 1200
	    })
    } else {
    	if(playerSaved.length>=3){
		    Meteor.call('deleteSavedGame',oldestSaved._id);
		    Meteor.call('insertNewSave',deviceId,lastStep);
				navigation.push("NextScreen")
				Toast.show({
		      text: 'Partida mas vieja borrada!',
		      textStyle: {fontSize: 18, marginLeft:(Dimensions.get('window').width/5)},
		      type: 'warning',
		      duration: 1500
		    });
			} 
			else {
				Meteor.call('insertNewSave',deviceId,lastStep);
				navigation.push("NextScreen")
				Toast.show({
		      text: 'Historia Guardada!',
		      textStyle: {fontSize: 18, marginLeft:(Dimensions.get('window').width/4)},
		      duration: 1200
		    })
			}
    }
	}
 
 	render() {
 		const toastStyle = {fontSize: 18, marginLeft:(Dimensions.get('window').width/4)};
 		const {deviceId, playerSaved} = this.props,
 			  	lastStep = reactive.get("pageCode");


 		return(
			<View style={styles.container}>
				<View style={styles.mainText}>
					<H2>No podes volver el tiempo atras!</H2>
				</View>
				<View style={styles.btnContainer}>
					<Button success onPress={() => {
					   this.props.navigation.push("NextScreen")
					}}>
						<Text>Volver</Text>
					</Button>

					<Button warning onPress={() => {
						reactive.set("pageCode", "a1")
						this.props.navigation.navigate("FirstPage")
						Toast.show({
              text: 'Historia Reiniciada!',
              //buttonText: 'Okasss',
              //position: 'top',
              textStyle: toastStyle,
              type: 'success',
              duration: 1200
            })

					}}>
					<Text>Reiniciar</Text>
					</Button>
				</View>



				<View style={styles.btnContainer}>
					
					<Button info onPress={() => this.saveGame(deviceId,lastStep)}>
						<Text>Guardar Partida</Text>
					</Button>

					<Button primary onPress={() => {
						this.props.navigation.navigate("Welcome")
					}}>
						<Text>Menu Principal</Text>
					</Button>
			    </View>
			  </View>
			)

 	}
	
}

export default StatsScreen;

const styles = StyleSheet.create({
	container:{
		flex: 1
	},
	mainText: {
		flex: 3,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	}
})