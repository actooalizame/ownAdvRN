import React, { Component } from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';

class Options extends Component {
  constructor(props) {
    super(props);
   	//this.testFun = this.testFun.bind(this);

  }


 	render() {
 		//let link = this.props.option.link;
 		return(
			<View>
				<Button 
					onPress={
						this.props.testFun
					}
					title = {String(this.props.option.optionText)}
				
				/>
			    
			    
			  </View>
			)

 	}
	
}

export default Options;