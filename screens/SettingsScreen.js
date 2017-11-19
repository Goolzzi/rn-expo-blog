import React, {Component} from "react";
import {Image} from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Switch,
  Item,
  Input,
  Card,
  CardItem,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Title,
} from "native-base";

class SettingsScreen extends Component {
  state = {isSelect: true};
  _onPressHandle = () => {
    this.setState({isSelect: !this.state.isSelect});
  };

  onValueChange(value, string) {
    this.setState({selected1: value});
  }

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor={"#494949"}
          style={{paddingTop: 5}}
          hasTabs
          backgroundColor="#FFF"
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color: "#0dc49d"}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: "#0dc49d"}}>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={require("../img/profile5.jpg")}
                style={{height: 150, width: null, flex: 1}}
              >
                <Text style={styles.text}>Jhon Smith</Text>
              </Image>
            </CardItem>
          </Card>

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

          <ListItem>
            <Text style={{color: "#0dc49d"}}> Get notifications each day</Text>
            <Body />
            <Right>
              <Switch
                onValueChange={value =>
                  this.setState({falseSwitchIsOn: !this.state.falseSwitchIsOn})}
                onTintColor="#0dc49d"
                value={this.state.falseSwitchIsOn}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Text style={{color: "#0dc49d"}}> Get notifications each week</Text>
            <Body />
            <Right>
              <Switch
                onValueChange={value =>
                  this.setState({
                    falseSwitchTwoIsOn: !this.state.falseSwitchTwoIsOn,
                  })}
                onTintColor="#0dc49d"
                value={this.state.falseSwitchTwoIsOn}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Text style={{color: "#0dc49d"}}>
              {" "}Get notifications each month
            </Text>
            <Body />
            <Right>
              <Switch
                onValueChange={value =>
                  this.setState({
                    falseSwitchThreeIsOn: !this.state.falseSwitchThreeIsOn,
                  })}
                onTintColor="#0dc49d"
                value={this.state.falseSwitchThreeIsOn}
              />
            </Right>
          </ListItem>
          <Button
            full
            transparent
            style={{marginTop: 5, marginBottom: 5}}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text style={{color: "#0dc49d"}}>Save</Text>
          </Button>
          <Button
            full
            style={{backgroundColor: "#0dc49d"}}
            onPress={() => this.props.navigation.navigate("Price")}
          >
            <Text style={{color: "#FFF"}}>Upgrade </Text>
          </Button>
          <Button
            full
            transparent
            style={{marginTop: 5}}
            onPress={() => this.props.navigation.navigate("Contact")}
          >
            <Text style={{color: "#0dc49d"}}>Support</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  text: {
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "rgba(73,73,73, .6)",
    color: "#0dc49d",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default SettingsScreen;
