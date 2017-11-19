import React from "react";
import { inject, observer } from "mobx-react";
import {Container, Tab, Tabs} from "native-base";
import Articles from "../components/Articles";
import ProContent from "../components/ProContent";

import CommonHeader from "../components/CommonHeader";

// import { getArticles } from '../service/service';

const mockCardsData = [
  {
    id: 1,
    title: "How to Run a Successful Startup",
    views: "200 Views",
    comments: "9 Comments",
    published: "4h ago",
    image: require("../img/img1.jpg"),
  },
  {
    id: 2,
    title: "How to Get Investment",
    views: "700 Views",
    comments: "16 Comments",
    published: "9h ago",
    image: require("../img/img2.jpg"),
  },
  {
    id: 3,
    title: "Latest Fashion Trends for 2017",
    views: "698 Views",
    comments: "8 Comments",
    published: "14h ago",
    image: require("../img/img3.jpg"),
  },
  {
    id: 4,
    title: "Top 20 Creative T-Shirts to Buy this Summer ",
    views: "375 Views",
    comments: "11 Comments",
    published: "8h ago",
    image: require("../img/img4.jpg"),
  },
  {
    id: 5,
    title: "The Hottest Tech Startups of the 2017",
    views: "786 Views",
    comments: "21 Comments",
    published: "18h ago",
    image: require("../img/img5.jpg"),
  },
  {
    id: 6,
    title: "Best Master Degree Programs",
    views: "96 Views",
    comments: "2 Comments",
    published: "1h ago",
    image: require("../img/img6.jpg"),
  },
  {
    id: 7,
    title: "How to Get Installs for your App",
    views: "350 Views",
    comments: "11 Comments",
    published: "12h ago",
    image: require("../img/img7.jpg"),
  },
];
@inject("articlesStore") @observer
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
  };
  componentWillMount() {
    /**** Fetch from Remote Json Data
    getArticles(url).then(res => {
      this.props.appState.fetchItems(res)
    })

    Should be used when data fetch from remote api.----:)

    *****/
    console.log('this--------', this.props.articlesStore)
    this.props.articlesStore.fetchItems(mockCardsData)
  }
  render() {
    return (
      <Container style={{backgroundColor: "#494949"}}>
        <CommonHeader {...this.props} />
        <Tabs tabBarUnderlineStyle={{backgroundColor: "#0dc49d"}}>
          <Tab
            tabStyle={{backgroundColor: "#EEE"}}
            heading="Popular"
            activeTextStyle={{color: "#0dc49d"}}
            activeTabStyle={{backgroundColor: "#EEE"}}
            textStyle={{color: "grey"}}
          >
            <Articles {...this.props} articleData={this.props.articlesStore.items} />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: "#EEE"}}
            heading="New"
            activeTextStyle={{color: "#0dc49d"}}
            activeTabStyle={{backgroundColor: "#EEE"}}
            textStyle={{color: "grey"}}
          >
            <Articles {...this.props} articleData={this.props.articlesStore.items}/>
          </Tab>
          <Tab
            tabStyle={{
              backgroundColor: "#EEE",
              borderLeftWidth: 0,
              marginLeft: 0,
            }}
            heading="Pro"
            activeTextStyle={{color: "#0dc49d"}}
            activeTabStyle={{backgroundColor: "#EEE"}}
            textStyle={{color: "grey"}}
          >
            <ProContent {...this.props} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
