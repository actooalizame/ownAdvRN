import React, { Component } from 'react';
import { StyleSheet,View,Text} from 'react-native';
import Meteor, { MeteorComplexListView,ReactiveDict } from 'react-native-meteor';
import Options from './Options';
import InitialPage from './InitialPage';


class Page extends Component {
  constructor(props) {
    super(props);
    
   	reactive = new ReactiveDict('reactive');
   	reactive.set("pageCode", "a1")
  }

 /*componentWillReceiveProps(props) {
    viewDetails = (car,imageUrl) => {
     
      props.navigator.push({
        screen: 'example.CarDetails',
        title: car.carName,
        passProps: {
          car,
          imageUrl
        },
        //screenBackgroundColor: '#fff',
        animationType: 'slide-horizontal'
      });
    }
    calculateCar = (car) => {
      props.navigator.push({
        screen: 'example.CarCalculator',
        title: car.carName,
        passProps: {
            car,
            navProps: props
          },
        //screenBackgroundColor: '#fff',
        animationType: 'slide-horizontal'
      });
    }
  }*/



	renderRow(page) {

	  const getOptions = function(){

	  	return page.pageOptions.map((option) =>{
	  		let link = option.link;
	  		
	  		let testFun = function(){		  	
		  		reactive.set("pageCode", link)
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

    if(pageCode==='a1'){
      return (
        <InitialPage />
        )
    } else {
      return (
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
      );
    }
    
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