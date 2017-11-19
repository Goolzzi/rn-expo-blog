import React, {Component} from "react";
import {View, Text, Image, KeyboardAvoidingView, Platform} from "react-native";
import {Content, Form, Item, Input, Icon, Button} from "native-base";

class ForgetpassScreen extends Component {
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
                width: 240,
                alignSelf: "center",
                marginBottom: 80,
              }}
              source={require("../img/logo.png")}
            />
            <Form>
              <Item style={{borderBottomColor: "#0dc49d", marginBottom: 10}}>
                <Icon active name="mail" style={{color: "#0dc49d"}} />
                <Input
                  placeholder="Email"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
            </Form>
            <Button
              full
              transparent
              style={{marginBottom: 5}}
              onPress={() => this.props.navigation.navigate("Signin")}
            >
              <Text style={{color: "#0dc49d"}}>Back To Home</Text>
            </Button>
            <Button
              full
              style={{backgroundColor: "#0dc49d"}}
              onPress={() => this.props.navigation.navigate("Signin")}
            >
              <Text style={{color: "#FFF"}}>Send</Text>
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
    bottom: 50,
    left: 0,
    right: 0,
  },
};

export default ForgetpassScreen;
