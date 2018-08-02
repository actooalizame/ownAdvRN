import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ReactiveDict } from 'react-native-meteor';
import { Container, Root } from 'native-base';
import Meteor from 'react-native-meteor';

import PageContainer from './src/containers/PageContainer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import NextScreen from './src/screens/NextScreen';
import StatsScreenContainer from './src/containers/StatsScreenContainer';
import LoadedScreenContainer from './src/containers/LoadedScreenContainer';
import SavedGamesContainer from './src/containers/SavedGamesContainer';

Meteor.connect('ws://192.168.86.148:3000/websocket');

const RootStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: () => ({
            header: null
          }),
    },
    FirstPage: {
        screen: PageContainer,
        navigationOptions: () => ({
            header: null
          }),
    },
    StatsScreen: {
        screen: StatsScreenContainer,
        navigationOptions: () => ({
            header: null
          }),
    },
    NextScreen: {
        screen: NextScreen,
        navigationOptions: () => ({
            header: null
          }),
    },
    SavedGames: {
        screen: SavedGamesContainer,
        navigationOptions: () => ({
            header: null
          }),
    },
    LoadedScreen: {
        screen: LoadedScreenContainer,
        navigationOptions: () => ({
            header: null
          }),
    },
    initialRouteName: 'Welcome',

});


export default class App extends React.Component {
    render() {
      
      return (
            <Root>
                <Container>
                    <RootStack />
                </Container>
            </Root>
        ) 
    }
}