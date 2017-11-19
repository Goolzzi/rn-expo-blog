import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import {
  Content,
  List,
  Icon,
  ListItem,
  Left,
  Input,
  Item,
} from "native-base";
import Exponent from "expo";
const screenHeight = Dimensions.get("window").height;
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
  },
  {
    name: "Business",
    route: "Home",
    icon: "briefcase",
  },
  {
    name: "Education",
    route: "Home",
    icon: "book",
  },
  {
    name: "Life Style",
    route: "Home",
    icon: "shirt",
  },
  {
    name: "Tech",
    route: "Home",
    icon: "phone-portrait",
  },
  {
    name: "Profile",
    route: "Profile",
    icon: "contact",
  },
  {
    name: "Settings",
    route: "Settings",
    icon: "settings",
  },
  {
    name: "Contact",
    route: "Contact",
    icon: "mail",
  },
  {
    name: "Log Out",
    route: "Signin",
    icon: "log-out",
  },
];

const DrawerContent = props => {

  return (
    <View style={style.container}>
      <Content style={{marginTop: 20}}>
        <Item style={{borderBottomColor: "#0dc49d"}}>
          <Icon
            active
            name="search"
            style={{color: "#0dc49d", marginLeft: 15}}
          />
          <Input
            placeholder="Search"
            placeholderTextColor="#0dc49d"
            style={{color: "#0dc49d"}}
          />
        </Item>
        <List
          dataArray={datas}
          renderRow={data =>
            <ListItem
              button
              noBorder
              onPress={() => props.navigation.navigate(data.route)}
            >
              <Left style={{marginLeft: 15}}>
                <Icon
                  active
                  name={data.icon}
                  style={{
                    color: "#0dc49d",
                    fontSize: 22,
                    marginTop: Platform.OS === "ios" ? 1.8 : 4,
                  }}
                />
                <Text style={{color: "#0dc49d", fontSize: 22, marginLeft: 15}}>
                  {data.name}
                </Text>
              </Left>
            </ListItem>}
        />
      </Content>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: "#494949",
    flex: 1,
    paddingTop: Exponent.Constants.statusBarHeight,
  },
});

export default DrawerContent;
