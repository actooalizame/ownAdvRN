import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
var DeviceInfo = require('react-native-device-info');

import SavedGames from '../screens/SavedGames';


export default SavedGamesContainer = createContainer(props => {

    var deviceId = DeviceInfo.getUniqueID();
    const saves = Meteor.subscribe('savedGames.all',deviceId);
    return {
        savesReady: saves.ready(),
       // playerSaved: Meteor.collection('savedGames').find({deviceId}, {sort: {createdAt: -1}}),
    };
 }, SavedGames);