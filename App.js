import { Navigation } from 'react-native-navigation';
import Meteor, { connectMeteor } from 'react-native-meteor';
import { registerScreens } from './src';


Meteor.connect('ws://192.168.1.87:3000/websocket');

registerScreens(); // this is where you register all of your app's src

//const cars = Meteor.subscribe('cars');
// start the app
Navigation.startTabBasedApp({
  appStyle: {
      //forceTitlesDisplay: true
    },
  tabs: [
    {
      label: 'Autos',
      screen: 'ownAdventure.PageContainer', // this is a registered name for a screen
      //icon: require('./src/car-icon.png'),
      icon: require('./src/public/car.png'),
      title: 'OwnAdventure',
      /*navigatorStyle: {
       // navBarCustomView: 'example.CustomTopBar',
        navBarBackgroundColor: '#fff',
      }*/

    },
    {
      label: 'Cotizador',
      screen: 'ownAdventure.PageContainer',
      icon: require('./src/public/budget-icon.png'),
      title: 'Cotizaciones'
    },

    {
      label: 'Contacto',
      screen: 'ownAdventure.PageContainer',
      icon: require('./src/public/phone-call.png'),
      title: 'Contacto'
    }
  ],
  appStyle: {
    tabBarBackgroundColor: '#fff',
    tabBarButtonColor: '#154928',
    //tabBarHideShadow: false,
    tabBarSelectedButtonColor: '#20733f',
    tabBarTranslucent: false,
    tabFontFamily: 'Arial',  // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
    navBarHeight: 110,
    navBarComponentAlignment: 'center',
   // navBarCustomView: 'example.CustomTopBar',
    tabFontSize: 14,
    selectedTabFontSize: 16
  },
});