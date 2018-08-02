import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');

import LoadedScreen from '../screens/LoadedScreen';

//Meteor.connect('ws://192.168.1.83:3000/websocket');

export default LoadedScreenContainer = createContainer(props => {
	var id = DeviceInfo.getUniqueID();
   	const pagesHandle = Meteor.subscribe('pages.all');
    Meteor.subscribe('options.all');
    return {
        pagesReady: pagesHandle.ready(),
        deviceId: id

    };
 }, LoadedScreen);
