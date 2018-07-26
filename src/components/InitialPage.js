import React, { Component } from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';

class InitialPage extends Component {
  constructor(props) {
    super(props);
   	//this.testFun = this.testFun.bind(this);

  }

  beginAdventure(){
  	console.log('hola')
  }


 	render() {
 		//let link = this.props.option.link;
 		return(
			<View>
				<Text>Pagina inicial</Text>

				<TouchableOpacity onPress={this.props.beginAdventure}>
		    	<Text>Toca para comenzar</Text>
		    </TouchableOpacity>
		 
		  </View>
			)

 	}
	
}

export default InitialPage;