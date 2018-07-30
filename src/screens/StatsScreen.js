import React, { Component } from 'react';
import { StyleSheet,View,Dimensions } from 'react-native';
import { Button, Text, Toast, H2 } from 'native-base';
var DeviceInfo = require('react-native-device-info');
import Meteor from 'react-native-meteor';


class StatsScreen extends Component {

	saveGame(deviceId,lastStep){
		console.log(deviceId)
		Meteor.call('insertNewSave',deviceId,lastStep);
	}
 
 	render() {
 		const toastStyle = {fontSize: 18, marginLeft:(Dimensions.get('window').width/4)};
 		const deviceId = DeviceInfo.getUniqueID(),
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
			              duration: 900
			            })

					}}>
					<Text>Reiniciar</Text>
					</Button>

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
		flex: 2,
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