import "expo";
import React from "react";
import {Image, TouchableHighlight} from "react-native";
import {
  Content,
  CardItem,
  Card,
  Thumbnail,
  Text,
  Body,
} from "native-base";

const mockCardsData = [
  {
    id: 1,
    title: "How to Run a Successful Startup",
    image: require("../img/img1.jpg"),
  },
  {id: 2, title: "How to Get Investment", image: require("../img/img2.jpg")},
  {
    id: 3,
    title: "Latest Fashion Trends for 2017",
    image: require("../img/img3.jpg"),
  },
  {
    id: 4,
    title: "Top 20 Creative T-Shirts to Buy this Summer ",
    image: require("../img/img4.jpg"),
  },
  {
    id: 5,
    title: "The Hottest Tech Startups of the 2017",
    image: require("../img/img5.jpg"),
  },
  {
    id: 6,
    title: "Best Master Degree Programs",
    image: require("../img/img6.jpg"),
  },
  {
    id: 7,
    title: "How to Get Installs for your App",
    image: require("../img/img7.jpg"),
  },
];

const ProfileContent = props => {
  return (
    <Content>
      <Card>
        <CardItem cardBody>
          <Image
            source={require("../img/profile5.jpg")}
            style={{height: 150, width: null, flex: 1}}
          >
            <Text
              style={{
                fontSize: 22,
                // backgroundColor:'#353535',
                textAlign: "center",
                backgroundColor: "rgba(73,73,73, .6)",
                color: "#0dc49d",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              Jhon Smith
            </Text>
          </Image>
        </CardItem>
      </Card>
      {mockCardsData.map((item, idx) => {
        return <CardItemContainer {...props} key={idx} item={item} />;
      })}
    </Content>
  );
};

const CardItemContainer = ({item, navigation}) => {
  return (
    <Card>
      <TouchableHighlight onPress={() => navigation.navigate("Post")}>
        <CardItem>
          <Thumbnail square size={60} source={item.image} />

          <Body>
            <Text
              style={{color: "#0dc49d", fontWeight: "bold", marginLeft: 10}}
            >
              {" "}{item.title}{" "}
            </Text>
          </Body>
        </CardItem>
      </TouchableHighlight>
    </Card>
  );
};

export default ProfileContent;
