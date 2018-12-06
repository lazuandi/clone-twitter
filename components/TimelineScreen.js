import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import {Icon} from 'native-base'
import Home from './Home'


export default class TimelineScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon : (
      <Icon name= 'ios-home' />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
       <Home/>
      </View>
    )
  }
}