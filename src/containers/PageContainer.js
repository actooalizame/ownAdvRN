import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import Page from '../components/Page';

Meteor.connect('ws://192.168.1.83:3000/websocket');

export default PageContainer = createContainer(props => {

   	const pagesHandle = Meteor.subscribe('pages.all');
    Meteor.subscribe('options.all');
    return {
        pagesReady: pagesHandle.ready(),

    };
 }, Page);
