import React from "react";
import {
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Body,
} from "native-base";
import {View} from "react-native";
const CommonHeader = props => {
  return (
    <View>
      <Header
        androidStatusBarColor={"#494949"}
        style={{paddingTop: 5}}
        hasTabs
        backgroundColor="#FFF"
      >
        <Left>
          <Button
            transparent
            onPress={() => props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="menu" style={{color: "#0dc49d"}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: "#0dc49d"}}>Home</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => props.navigation.navigate("Settings")}
          >
            <Icon name="settings" style={{color: "#0dc49d"}} />
          </Button>
        </Right>
      </Header>
    </View>
  );
};

export default CommonHeader;
