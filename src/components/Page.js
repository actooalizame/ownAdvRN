import React, { Component } from 'react';
import { StyleSheet,View,Text,Button,Alert} from 'react-native';
import Meteor, { MeteorComplexListView,ReactiveDict } from 'react-native-meteor';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import Options from './Options';

class Page extends Component {

  constructor(props) {
    super(props);
    
   	reactive = new ReactiveDict('reactive');
     reactive.set("pageCode", "a1")
     const {navigation} = this.props;
     
  }
	renderRow(page) {
    const { navigation } = this.props;
	  const getOptions = function(){

	  	return page.pageOptions.map((option) =>{
	  		let link = option.link;
	  		
	  		let testFun = function(){		  	
          reactive.set("pageCode", link);
          navigation.push('NextScreen');
		  	};
	      return <Options key={option._id} option={option} testFun={testFun}/>
	    });
    };
       
    return (      
          <View>
            <Text >{page.pageCode}</Text>
          
            <Text>{page.pageText}</Text>
            <View>
            	{getOptions()}
            </View>
          </View>
    );
  }

  onBackButtonPressAndroid = () => {
    /*
    *   Returning `true` from `onBackButtonPressAndroid` denotes that we have handled the event,
    *   and react-navigation's lister will not get called, thus not popping the screen.
    *
    *   Returning `false` will cause the event to bubble up and react-navigation's listener will pop the screen.
    * */

    console.log("hola!");
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me lateri', onPress: () => navigation.popToTop},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )

  };


  render() {
    const { pagesReady } = this.props;
    //let {pageCode} = this.state;
    let pageCode = reactive.get("pageCode")
    
    if (!pagesReady) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <View style={styles.container}>


          <MeteorComplexListView
            enableEmptySections
            elements={()=>{
              return Meteor.collection('pages').find({pageCode}).map((page) => {
                const pageOptions = Meteor.collection('options').find({pageCode: page.pageCode});
               return {
                 ...page,
                 pageOptions
               };
              })
            }}
            renderRow={this.renderRow.bind(this)}
          />


        </View>
      </AndroidBackHandler>
    );
  }

}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //backgroundColor: '#fff'
  }
});