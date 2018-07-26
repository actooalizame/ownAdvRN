import React from 'react';
import { createStackNavigator } from 'react-navigation';

import PageContainer from './src/containers/PageContainer';
import DetailsScreen from './src/screens/DetailsScreen';
import NextScreen from './src/screens/NextScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: PageContainer,
    },
    Detalles: {
        screen: DetailsScreen
    },
    NextScreen: {
        screen: NextScreen,
        navigationOptions: () => ({
            //title: `A`,
            headerLeft: null
          }),
    },
});

export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
}