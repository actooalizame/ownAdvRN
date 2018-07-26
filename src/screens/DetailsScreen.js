import React from 'react';
import { View, Text, Button } from 'react-native';
import  {ReactiveDict } from 'react-native-meteor';


export default class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        
           reactive = new ReactiveDict('reactive');
      }

  render() {
    const { navigation } = this.props;
    const page = navigation.getParam('page');
    const options = navigation.getParam('options');

    const optionData = options.map((option) =>{
        let link = option.link,
            text = option.text,
            code = option.pageCode;

        console.log(reactive.get("pageCode"))
        const yourFunction = function(){
            navigation.push('Detalles', {
               page: page,
               options: options
             })
           }

        return (
            <Button
              title= {String(link+ " - " +text)}
              onPress={() => {
                reactive.set("pageCode", code)
                yourFunction()
              }}
            />
        );
    })


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{page.pageCode}</Text>
        <Text>{page.pageText}</Text>
        {optionData}
        
      </View>
    );
  }
}