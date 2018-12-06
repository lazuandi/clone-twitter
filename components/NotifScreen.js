import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import {Icon} from 'native-base'


export default class NotifScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon : (
      <Icon name= 'ios-notifications' />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notif</Text>
      </View>
    )
  }
}