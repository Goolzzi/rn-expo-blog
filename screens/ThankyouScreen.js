import React, {Component} from "react";
import {Image} from "react-native";
import {
  Content,
  Button,
  Text,
  Icon,
} from "native-base";

class ThankyouScreen extends Component {

  render() {
    return (
      <Image style={styles.image} source={require("../img/cover.jpg")}>
        <Content
          contentContainerStyle={{
            alignSelf: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Icon name="checkmark" style={styles.icon} />
          <Text style={styles.text}> Thank You For Joining Us!!</Text>
          <Button
            bordered
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={{color: "#0dc49d"}}> Back To Home</Text>
          </Button>
        </Content>
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

  icon: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 90,
    fontWeight: "bold",
    color: "#0dc49d",
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "#0dc49d",
  },
  button: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 10,
    fontWeight: "bold",
    color: "#0dc49d",
    borderColor: "#0dc49d",
  },
};

export default ThankyouScreen;
