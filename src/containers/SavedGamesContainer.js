import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';


import SavedGames from '../screens/SavedGames';


export default SavedGamesContainer = createContainer(props => {

    //const saves = Meteor.subscribe('savedGames.all');
    
    const saves = Meteor.subscribe('savedGames.all');
    return {
        savesReady: saves.ready(),
       // playerSaved: Meteor.collection('savedGames').find({deviceId}, {sort: {createdAt: -1}}),
    };
 }, SavedGames);