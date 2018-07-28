import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { Button, Text } from 'native-base';

class Options extends Component {
  constructor(props) {
    super(props);

  }


 	render() {
 		return(
			<View style={styles.optionBtn}>
				<Button bordered danger onPress={this.props.testFun}>
					<Text style={styles.optionText}>{String(this.props.option.optionText)}</Text>
				</Button>
			    
			    
			  </View>
			)

 	}
	
}

export default Options;

const styles = StyleSheet.create({
  optionText: {
  	fontSize: 12
  },
  optionBtn: {
  	marginTop: 18
  }
});