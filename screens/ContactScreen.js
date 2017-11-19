import React, {Component} from "react";
import {Image, KeyboardAvoidingView, Platform} from "react-native";
import {Content, Icon, Form, Button, Text, Item, Input} from "native-base";

class ContactScreen extends Component {
  render() {
    return (
      <Image style={styles.image} source={require("../img/cover.jpg")}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <Content scrollEnabled={false}>
            <Icon name="mail" style={styles.icon} />
            <Text style={styles.text}> Contact Us </Text>

            <Form>
              <Item style={{borderBottomColor: "#0dc49d"}}>
                <Icon active name="mail" style={{color: "#0dc49d"}} />
                <Input
                  placeholder="Email"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
              <Item style={{borderBottomColor: "#0dc49d", marginBottom: 15}}>
                <Icon active name="paper-plane" style={{color: "#0dc49d"}} />
                <Input
                  placeholder="Your Message"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
            </Form>

            <Button
              full
              style={{backgroundColor: "#0dc49d"}}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={{color: "#FFF"}}>Send</Text>
            </Button>
          </Content>
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
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 70,
    fontWeight: "bold",
    color: "#0dc49d",
    marginBottom: 2,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 25,
    color: "#0dc49d",
    marginBottom: 180,
  },
};

export default ContactScreen;
