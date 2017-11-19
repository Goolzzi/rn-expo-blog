import React, {Component} from "react";
import {Image, KeyboardAvoidingView, Platform} from "react-native";
import {
  Content,
  Grid,
  Row,
  Col,
  Icon,
  Form,
  Button,
  Text,
  Item,
  Input,
} from "native-base";

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  onChange(text) {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    this.setState({myNumber: newText});
  }
  handleChange = text => {
    let textTemp = text;
    if (textTemp[0] !== "1" && textTemp[0] !== "0") {
      textTemp = "";
    }
    if (textTemp.length === 2) {
      if (parseInt(textTemp.substring(0, 2)) > 12) {
        textTemp = textTemp[0];
      } else if (this.state.text.length === 1) {
        textTemp += "/";
      } else {
        textTemp = textTemp[0];
      }
    }
    this.setState({text: textTemp});
  };

  render() {
    return (
      <Image style={styles.image} source={require("../img/cover.jpg")}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <Content scrollEnabled={false}>
            <Text style={styles.icon}> $21</Text>
            <Text style={styles.text}> $1.01 Vat Included</Text>
            <Form>
              <Item style={{borderBottomColor: "#0dc49d"}}>
                <Icon active name="card" style={{color: "#0dc49d"}} />
                <Input
                  keyboardType="numeric"
                  maxLength={16}
                  placeholder="Card Number"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                  onChangeText={text => this.onChange(text)}
                  value={this.state.myNumber}
                />
              </Item>
              <Grid>
                <Row>
                  <Col>
                    <Item
                      style={{borderBottomColor: "#0dc49d", marginBottom: 15}}
                    >
                      <Icon active name="calendar" style={{color: "#0dc49d"}} />
                      <Input
                        keyboardType="numeric"
                        placeholder="MM/YY (e.g. 08/18)"
                        placeholderTextColor="#0dc49d"
                        style={{color: "#0dc49d"}}
                        onChangeText={this.handleChange}
                        value={this.state.text}
                        maxLength={5}
                      />
                    </Item>
                  </Col>
                  <Col style={{width: 120}}>
                    <Item
                      style={{borderBottomColor: "#0dc49d", marginBottom: 15}}
                    >
                      <Icon active name="lock" style={{color: "#0dc49d"}} />
                      <Input
                        maxLength={3}
                        keyboardType="numeric"
                        secureTextEntry={true}
                        placeholder="CVV"
                        placeholderTextColor="#0dc49d"
                        style={{color: "#0dc49d"}}
                      />
                    </Item>
                  </Col>
                </Row>
              </Grid>
              <Item style={{borderBottomColor: "#0dc49d", marginBottom: 15}}>
                <Icon active name="contact" style={{color: "#0dc49d"}} />
                <Input
                  placeholder="Card Holder"
                  placeholderTextColor="#0dc49d"
                  style={{color: "#0dc49d"}}
                />
              </Item>
            </Form>
            <Button
              full
              transparent
              style={{marginBottom: 5}}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={{color: "#0dc49d"}}>Back To Home</Text>
            </Button>

            <Button
              full
              style={{backgroundColor: "#0dc49d"}}
              onPress={() => this.props.navigation.navigate("Thankyou")}
            >
              <Text style={{color: "#FFF"}}> Checkout</Text>
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
  icon: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 70,
    fontWeight: "bold",
    color: "#0dc49d",
    marginBottom: 5,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "#0dc49d",
    marginBottom: 100,
  },
};

export default CheckoutScreen;
