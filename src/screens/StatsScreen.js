import React, { Component } from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';

class StatsScreen extends Component {
 
 	render() {
 		 		
 		let reactivePageCode = this.props.navigation.state.params;
 		console.log(reactivePageCode)
 		return(
			<View>
				<Text>No podes volver el tiempo atras!</Text>
				<Button onPress={() => {
				   this.props.navigation.push("NextScreen")
				}}
				title="Volver"
				/>

				<Button onPress={() => {
					reactive.set("pageCode", "a1")
					this.props.navigation.push("Home")
				}}
				title="Reiniciar"
				/>
			    
			  </View>
			)

 	}
	
}

export default StatsScreen;