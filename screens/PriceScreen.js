import React from "react";
import {Text, Image} from "react-native";
import {Button, Icon, Card, CardItem, Content, Right, Body} from "native-base";

class PriceScreen extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
  };
  render() {
    return (
      <Image style={styles.image} source={require("../img/cover.jpg")}>
        <Content
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Card
            style={{
              position: "absolute",
              left: 30,
              right: 30,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <CardItem style={{alignSelf: "center"}}>
              <Text style={styles.text}>Pro</Text>
            </CardItem>
            <CardItem style={{backgroundColor: "#0dc49d"}}>
              <Text
                style={{
                  fontSize: 50,
                  color: "#ffffff",
                  alignSelf: "center",
                  marginLeft: 10,
                }}
              >
                {" "}$19
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: "#ffffff",
                  alignSelf: "center",
                  marginBottom: 30,
                }}
              >
                {" "}99
              </Text>
              <Text style={{fontSize: 14, color: "#ffffff"}}>per month </Text>
            </CardItem>
            <CardItem>
              <Text style={styles.text}>Choose topics</Text>
              <Body />
              <Right>
                <Icon name="checkbox" style={styles.icon} />
              </Right>
            </CardItem>
            <CardItem>
              <Text style={styles.text}>New content 24/7</Text>
              <Body />
              <Right>
                <Icon name="checkbox" style={styles.icon} />
              </Right>
            </CardItem>
            <CardItem>
              <Text style={styles.text}>Read offline</Text>
              <Body />
              <Right>
                <Icon name="checkbox" style={styles.icon} />
              </Right>
            </CardItem>
            <CardItem style={{justifyContent: "center", alignSelf: "center"}}>
              <Button
                style={{backgroundColor: "#0dc49d"}}
                onPress={() => this.props.navigation.navigate("Checkout")}
              >
                <Text style={{color: "#FFF", fontSize: 20}}>
                  Upgrade Account
                </Text>
              </Button>
            </CardItem>
          </Card>
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
  card: {
    Position: "Absolute",
    Left: 30,
    Right: 50,
    justifyContent: "center",
  },

  text: {
    alignSelf: "center",
    color: "#0dc49d",
    fontSize: 20,
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0dc49d",
  },
};

export default PriceScreen;
