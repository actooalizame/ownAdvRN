import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');

import Page from '../components/Page';

Meteor.connect('ws://192.168.1.83:3000/websocket');

export default PageContainer = createContainer(props => {
	var id = DeviceInfo.getUniqueID();
   	const pagesHandle = Meteor.subscribe('pages.all');
    Meteor.subscribe('options.all');
    return {
        pagesReady: pagesHandle.ready(),
        deviceId: id

    };
 }, Page);
