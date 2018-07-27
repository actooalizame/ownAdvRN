import React, { Component } from 'react';
import { StyleSheet,View,Text,Button,BackHandler,Alert } from 'react-native';
import Meteor, { MeteorComplexListView,ReactiveDict } from 'react-native-meteor';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import Options from '../components/Options';


class NextScreen extends Component {

  constructor(props) {
    super(props);
    
   	let newScreen = reactive.get("pageCode")
    reactive.set("pageCode", newScreen)
    //const {navigation} = this.props;
  }


	renderRow(page) {
    const {navigation} = this.props;

	  const getOptions = function(){
	  	return page.pageOptions.map((option) =>{
	  		let link = option.link;
	  		
	  		let testFun = function(){		  	
            reactive.set("pageCode", link)
            navigation.push('NextScreen') 
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
    let reactivePageCode = reactive.get("pageCode");
  
    if(reactivePageCode!=="a1"){
      this.props.navigation.push("StatsScreen",reactivePageCode)
      return true
    }

  };

  render() {
    const { pagesReady } = this.props;
    let pageCode = reactive.get("pageCode") 

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

export default NextScreen;

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