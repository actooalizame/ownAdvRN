import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ReactiveDict } from 'react-native-meteor';

import PageContainer from './src/containers/PageContainer';
import DetailsScreen from './src/screens/DetailsScreen';
import NextScreen from './src/screens/NextScreen';
import StatsScreen from './src/screens/StatsScreen';
import Loading from './src/components/Loading';

const RootStack = createStackNavigator({
    Home: {
        screen: PageContainer,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
    },
    Detalles: {
        screen: DetailsScreen
    },
    StatsScreen: {
        screen: StatsScreen,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
    },
    NextScreen: {
        screen: NextScreen,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
    },
    Loading: {
        screen: Loading,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
    },
    initialRouteName: 'Home',

});


export default class App extends React.Component {
    render() {
      
      return (
            <RootStack />
        ) 
    }
}