import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ReactiveDict } from 'react-native-meteor';
import { Container, Root } from 'native-base';

import PageContainer from './src/containers/PageContainer';
import WelcomeScreen from './src/screens/WelcomeScreen';
import NextScreen from './src/screens/NextScreen';
import StatsScreen from './src/screens/StatsScreen';
import LoadedScreenContainer from './src/containers/LoadedScreenContainer';
import SavedGamesContainer from './src/containers/SavedGamesContainer';

const RootStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
    },
    FirstPage: {
        screen: PageContainer,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
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
    SavedGames: {
        screen: SavedGamesContainer,
        navigationOptions: () => ({
            //title: `A`,
            header: null
          }),
    },
    LoadedScreen: {
        screen: LoadedScreenContainer,
        navigationOptions: () => ({
            //title: `A`,
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