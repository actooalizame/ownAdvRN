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
        screen: StatsScreen,
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