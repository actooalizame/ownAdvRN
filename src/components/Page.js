import React, { Component } from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';
import Meteor, { MeteorComplexListView,ReactiveDict } from 'react-native-meteor';
import Options from './Options';

class Page extends Component {

  constructor(props) {
    super(props);
    
   	reactive = new ReactiveDict('reactive');
     reactive.set("pageCode", "a1")
     const {navigation} = this.props;
     
  }

	renderRow(page) {

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

    const geto = function(){
      return page.pageOptions.map((option) =>{
        
        let link = option.link;
        let text = option.optionText;

        let testFun = function(){		  	
		  		reactive.set("pageCode", link)
		  	};
        console.log(reactive.get("pageCode"));
        
        /*const optionsData = {
          link: option.link,
          text: option.optionText,
          pageCode: option.pageCode
        }*/

	      //return <Options key={option._id} option={option} testFun={testFun}/>
	    });
    };
    
    const { navigation } = this.props;
     
   
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