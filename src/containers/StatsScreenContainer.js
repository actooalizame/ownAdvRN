import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');

import StatsScreen from '../screens/StatsScreen';


export default StatsScreenContainer = createContainer(props => {

    const deviceId = DeviceInfo.getUniqueID();
    Meteor.subscribe('savedGames.all',deviceId);

    return {
       playerSaved: Meteor.collection('savedGames').find({deviceId:deviceId}, {sort: {createdAt: -1}}),
       oldestSaved: Meteor.collection('savedGames').findOne({deviceId:deviceId}, {sort: {createdAt: 1}}),
       deviceId
    };
 }, StatsScreen);