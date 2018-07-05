import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import Page from '../components/Page';

Meteor.connect('ws://192.168.1.87:3000/websocket');

export default PageContainer = createContainer(props => {

    //const carsHandle = Meteor.subscribe('cars.all');
   	//const imageHandle = Meteor.subscribe('images.onlyOne');
   	const pagesHandle = Meteor.subscribe('pages.all');
    Meteor.subscribe('options.all');
    return {
        pagesReady: pagesHandle.ready(),
        //imageReady: imageHandle.ready(),
       // image: Meteor.collection('carImages').findOne({}, {sort: {createdAt: -1}})
    };
 }, Page);

//playing: Meteor.collection('currentSongs').findOne({}, {sort: {createdAt: -1}})