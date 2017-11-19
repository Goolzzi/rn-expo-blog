import React, {Component} from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Title,
} from "native-base";
import ProfileContent from "../components/ProfileContent";

class ProfileScreen extends Component {

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
            <Title style={{color: "#0dc49d"}}>Profile</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              <Icon name="settings" style={{color: "#0dc49d"}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <ProfileContent {...this.props} />
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: "#FFF"}}>
            <Button vertical>
              <Icon name="paper" style={{color: "#0dc49d"}} />
              <Text style={{color: "#0dc49d"}}> Posts</Text>
            </Button>
            <Button vertical>
              <Icon name="bookmark" style={{color: "#0dc49d"}} />
              <Text style={{color: "#0dc49d"}}>Bookmarks</Text>
            </Button>
            <Button style={{backgroundColor: "#FFF"}} vertical active>
              <Icon active name="chatbubbles" style={{color: "#0dc49d"}} />
              <Text style={{color: "#0dc49d"}}>Comments</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ProfileScreen;
