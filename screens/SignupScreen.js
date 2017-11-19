import React, {Component} from "react";
import {View, Text, Image, KeyboardAvoidingView, Platform} from "react-native";
import {Content, Form, Item, Input, Button, Icon} from "native-base";

class SignupScreen extends Component {
  static navigationOptions = {
    gesturesEnabled: false,
  };

  render() {
    return (
      <Image style={styles.image} source={require("../img/cover.jpg")}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <Content scrollEnabled={false}>
            <Image
              style={{
                height: 180,
                width: 180,
                alignSelf: "center",
                marginBottom: 50,
              }}
              source={require("../img/logo.png")}
            />
            <Form>
              <Item style={{borderBottomColor: "#0dc49d"}}>
                <Icon
                  active
                  name="contact"
                  style={{color: "#0dc49d", marginLeft: 5}}
                />
                <Input
                  placeholder="Username"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
              <Item style={{borderBottomColor: "#0dc49d"}}>
                <Icon
                  active
                  name="mail"
                  style={{color: "#0dc49d", marginLeft: 5, marginRight: 1}}
                />
                <Input
                  placeholder="Email"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
              <Item style={{borderBottomColor: "#0dc49d"}}>
                <Icon
                  active
                  name="lock"
                  style={{color: "#0dc49d", marginLeft: 5, marginRight: 4}}
                />
                <Input
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
              <Item style={{borderBottomColor: "#0dc49d", marginBottom: 15}}>
                <Icon
                  active
                  name="lock"
                  style={{color: "#0dc49d", marginLeft: 5, marginRight: 4}}
                />
                <Input
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
            </Form>
            <Button
              full
              style={{backgroundColor: "#0dc49d"}}
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Text style={{color: "#FFF"}}>Sign Up</Text>
            </Button>
          </Content>
          <View style={{height: 10}} />
        </KeyboardAvoidingView>
      </Image>
    );
  }
}

const styles = {
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
  },
  content: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
};

export default SignupScreen;
