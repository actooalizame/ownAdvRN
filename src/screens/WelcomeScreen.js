import React, { Component } from 'react';
import { StyleSheet,View} from 'react-native';
import { ReactiveDict } from 'react-native-meteor';
import { Text,Button,H1 } from 'native-base';

class WelcomeScreen extends Component {

	constructor(props) {
    super(props);
    
	   	reactive = new ReactiveDict('reactive');
	     
	  }
 
 	render() {
 		 		
 		return(
			<View style={styles.container}>
				<View style={styles.mainText}>
					<H1>Bienvenido a Mi App!</H1>
				</View>
				<View style={styles.btnContainer}>
					<Button success onPress={() => {
						reactive.set("pageCode", "a1")
						this.props.navigation.push("FirstPage")
					}}>
						<Text>Comenzar!</Text>
					</Button>
					<Button info onPress={() => {
						this.props.navigation.push("SavedGames")
					}}>
						<Text>Cargar Partida</Text>
					</Button>
			    </View>
			  </View>
			)

 	}
	
}

export default WelcomeScreen;

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
		justifyContent: 'space-evenly',
		//marginLeft: '25%'
	}
})