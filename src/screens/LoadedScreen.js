import React, { Component } from 'react';
import { StyleSheet,View,Button,BackHandler } from 'react-native';
import Meteor, { MeteorComplexListView,ReactiveDict } from 'react-native-meteor';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { Text, Content } from 'native-base';

import Options from '../components/Options';


class LoadedScreen extends Component {

  constructor(props) {
    super(props);
    
   	let newScreen = reactive.get("pageCode")
    reactive.set("pageCode", newScreen)
    //const {navigation} = this.props;
  }


	renderRow(page) {
    const {navigation} = this.props;
    const deviceId = navigation.getParam('deviceId');
    console.log(deviceId)
	  const getOptions = function(){
	  	return page.pageOptions.map((option) =>{
	  		let link = option.link;
	  		
	  		let testFun = function(){		  	
            reactive.set("pageCode", link)
            navigation.push('NextScreen',{
              deviceId
            }) 
		  	};

	      return <Options key={option._id} option={option} testFun={testFun}/>
	    });
    };

     
    return (
          <View style={styles.pageContainer}>

            <View style={styles.pageContent}>
              <View>
              <Text>
              
              {page.pageText}
             
              </Text>
               </View>
            </View>
            <View style={styles.btnContainer}>
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

    let reactivePageCode = reactive.get("pageCode");
  
    if(reactivePageCode!=="a1"){
      this.props.navigation.push("StatsScreen")
      return true
    }

  };

  render() {
    const { pagesReady } = this.props;
    //let pageCode = reactive.get("pageCode") 
    const pageCode = this.props.navigation.getParam('pageCode');
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

export default LoadedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  pageContainer: {
    //flex: 1,
    margin:"3.3%",
    flexDirection: 'column',
   // height: (Dimensions.get('window').height),
  },
  pageContent: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //marginBottom: 0
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: "8%"
  },
});