/**
 * CSQ Demo React Native App
 * Author: cpp
 * magicfish921@gmail.com
 */

import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import SignInContainer from './containers/SignInContainer' 
import ChatRoomContainer from './containers/ChatRoomContainer' 

import CSQReducers from './reducers'

let store = createStore(CSQReducers, applyMiddleware(thunk))

export default class CSQDemo extends Component {
  render() {
    console.log('Redux state is : ' + store.getState())
    return (
      <Provider store={store}>
        <ChatRoomContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CSQDemo', () => CSQDemo);
