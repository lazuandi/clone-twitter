import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Icon } from "native-base";
import TimelineScreen from "./components/TimelineScreen";
import NotifScreen from "./components/NotifScreen";
import SearchScreen from "./components/SearchScreen";
import MessageScreen from "./components/MessageScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Timeline: TimelineScreen,
    Search: SearchScreen,
    Notif: NotifScreen,
    Message: MessageScreen
  },
  {
    initialRouteName: "Timeline"
  }
);

export default createAppContainer(TabNavigator);
