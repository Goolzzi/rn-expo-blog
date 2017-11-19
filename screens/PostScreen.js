import React, {Component} from "react";
import { Image} from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Icon,
  CardItem,
  Card,
  Button,
  Thumbnail,
  Text,
  Body,
  Item,
  Input,
} from "native-base";

class PostScreen extends Component {
  static navigationOptions = {
    header: {
      visible: null,
    },
  };

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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: "#0dc49d"}} />
              <Text style={{color: "#0dc49d"}}> Back</Text>
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent>
              <Icon name="share" style={{color: "#0dc49d"}} />
            </Button>
          </Right>
        </Header>

        <Content>
          <Card>
            <CardItem style={{borderBottomWidth: 0, paddingBottom: 0}}>
              <Text> How to Run a Successful Startup</Text>
            </CardItem>
            <CardItem style={{borderBottomWidth: 0, paddingBottom: 0}}>
              <Image
                source={require("../img/img1.jpg")}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={require("../img/profile4.jpg")} />
                <Body>
                  <Text>Joel Henry</Text>
                  <Text note> Author</Text>
                </Body>
              </Left>
              <Right>
                <Text style={{color: "#0dc49d"}}>Business</Text>
              </Right>
            </CardItem>

            <CardItem style={{borderBottomWidth: 0, paddingBottom: 0}}>
              <Text note style={{flex: 1}}>
                Lorem ipsum dolor sit amet, etiam option qui te. Amet lucilius
                philosophia in quo, eu eam assum gubergren honestatis, no mundi
                dicant inermis vix. Ferri minim convenire duo no. Est at etiam
                munere, pri dolore erroribus honestatis ad. No pri wisi essent,
                at vis tempor erroribus. Vis illum discere utroque an. Exerci
                diceret complectitur ius et, per in illud percipit pericula, at
                per homero semper facilis. Has et invenire oportere. Quo et
                postea discere definitiones, per ei causae ponderum. Mea audire
                fabulas ne. Te nam accusam cotidieque definitiones, per ut modo
                appetere. At quod epicurei elaboraret sea, elit erant epicuri
                est ad. Autem impetus no has, ut consulatu conclusionemque quo.
                Modus molestiae repudiandae id mel, sea id ridens equidem
                concludaturque, ei vel atqui dicit. Eam audire denique eu, et
                abhorreant suscipiantur pri. Eu his utinam iudicabit, feugait
                similique voluptaria nam at. Eu consul verterem omittantur sea,
                ei illum debitis vix. Usu eu iudico volumus scaevola, magna
                perfecto est ad, nec et corrumpit rationibus. Ex vel utinam
                deserunt pericula. Per omnis nusquam ullamcorper cu, te qui
                etiam harum dissentias. Nec aeterno explicari ad, vix at
                pericula electram signiferumque. Ad iudico partem deterruisset
                sit, id simul elitr vix, etiam nonumy postulant no cum. Est ut
                hinc oporteat. Movet eripuit ei vel, primis animal ius ad. No
                sea eros aperiam vituperata, inani vidisse ei duo. Eirmod
                accusata in his, esse nostrum mei cu, qui ex unum mutat vitae.
              </Text>
            </CardItem>
            <CardItem>
              <Left />
              <Body>
                <Text> Comments</Text>
              </Body>
              <Right />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Thumbnail source={require("../img/profile1.jpg")} />
              <Body style={{marginLeft: 10}}>
                <Text>John Baker</Text>
                <Text note>
                  Lorem ipsum dolor sit amet, qui quaerendum definitionem cu.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Thumbnail source={require("../img/profile2.jpg")} />
              <Body style={{marginLeft: 10}}>
                <Text>Samantha Stewart</Text>
                <Text note>
                  Lorem ipsum dolor sit amet, qui quaerendum definitionem cu.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Thumbnail source={require("../img/profile3.jpg")} />
              <Body style={{marginLeft: 10}}>
                <Text>Lauren Murray</Text>
                <Text note>
                  Its Lorem ipsum dolor sit amet, qui quaerendum definitionem
                  cu.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{marginRight: 10}}>
              <Thumbnail source={require("../img/profile4.jpg")} />

              <Body style={{marginLeft: 10}}>
                <Text>Joel Henry</Text>
                <Text note>
                  Lorem ipsum dolor sit amet, qui quaerendum definitionem cu.{" "}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Thumbnail small source={require("../img/profile4.jpg")} />

              <Item>
                <Input
                  placeholder="Write a comment"
                  style={{
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderBottomColor: "#0dc49d",
                  }}
                />
              </Item>
            </CardItem>
            <CardItem>
              <Left />
              <Body />
              <Right>
                <Button transparent>
                  <Icon
                    active
                    name="chatbubbles"
                    style={{fontSize: 30, color: "#0dc49d"}}
                  />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default PostScreen;
