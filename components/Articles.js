import "expo";
import React from "react";
import {Image, TouchableHighlight} from "react-native";
import {
  Content,
  Left,
  Right,
  Icon,
  CardItem,
  Card,
  Button,
  Text,
  Body,
} from "native-base";

const Articles = props => {
  return (
    <Content>
      {props.articleData.map((item, idx) => {
        return <CardItemContainer {...props} key={idx} item={item} />;
      })}
    </Content>
  );
};

const CardItemContainer = ({item, navigation}) => {
  return (
    <Card style={{marginBottom: 10}}>
      <TouchableHighlight onPress={() => navigation.navigate("Post")}>
        <CardItem cardBody>
          <Image
            source={item.image}
            style={{height: 150, width: null, flex: 1}}
          >
            <Text
              style={{
                fontSize: 22,
                textAlign: "center",
                backgroundColor: "rgba(73,73,73, .6)",
                color: "#0dc49d",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              {item.title}
            </Text>
          </Image>
        </CardItem>
      </TouchableHighlight>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon
              active
              name="eye"
              style={{color: "#0dc49d", marginRight: 5}}
            />
            <Text style={{color: "#0dc49d"}}>
              {item.views}
            </Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon
              active
              name="chatbubbles"
              style={{color: "#0dc49d", marginRight: 5}}
            />
            <Text style={{color: "#0dc49d"}}>
              {item.comments}
            </Text>
          </Button>
        </Body>
        <Right>
          <Text style={{color: "#0dc49d"}}>
            {item.published}
          </Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default Articles;
