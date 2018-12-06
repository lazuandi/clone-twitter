import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Fab
} from "native-base";
import { StyleSheet, View } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor : "white"}}>
          <Left>
            <ListItem avatar>
              <Thumbnail
                small
                source={{
                  uri:
                    "https://avatars2.githubusercontent.com/u/43042382?s=460&v=4",
                }}
              />
              <Text style={{ fontStyle: "normal", left: 10 }}>Home</Text>
            </ListItem>
          </Left>
          <Body ></Body>      
          
          <Right />
        </Header>
      </Container>
    );
  }
}
