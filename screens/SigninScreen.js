import React, {Component} from "react";
import {Text, Image, KeyboardAvoidingView, Platform} from "react-native";
import {
  Content,
  Form,
  Item,
  Input,
  Icon,
  Button,
  ListItem,
  Row,
  Col,
  Grid,
} from "native-base";

class SigninScreen extends Component {
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
                marginBottom: 80,
              }}
              source={require("../img/logo.png")}
            />
            <Form>
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
            </Form>
            <ListItem
              style={{
                borderBottomWidth: 0,
                borderTopWidth: 0,
                borderBottomColor: "#0dc49d",
              }}
            >
              <Grid>
                <Row>
                  <Col>
                    <Button
                      transparent
                      onPress={() => this.props.navigation.navigate("Signup")}
                    >
                      <Text style={{color: "#0dc49d"}}>Create Account</Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      transparent
                      onPress={() =>
                        this.props.navigation.navigate("Forgetpass")}
                    >
                      <Text style={{color: "#0dc49d"}}>Forgot Password</Text>
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </ListItem>
            <Button
              full
              style={{backgroundColor: "#0dc49d"}}
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Text style={{color: "#FFF"}}>Sign In</Text>
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
    bottom: 10,
    left: 0,
    right: 0,
  },
};

export default SigninScreen;
