import React, { Component } from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';

class Options extends Component {
  constructor(props) {
    super(props);
   	//this.testFun = this.testFun.bind(this);

  }


 	render() {
 		//let link = this.props.option.link;
 		return(
			<View>
				<TouchableOpacity onPress={this.props.testFun}>
		    	
		    </TouchableOpacity>
		    <Text>{this.props.option.optionText} </Text>
		  </View>
			)

 	}
	
}

export default Options;