import React from "react";
import {Text, View} from "react-native";
import {Button, Icon} from "native-base";
import Swiper from "react-native-swiper";

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        visible: true,
      });
    }, 100);
  }

  render() {
    if (this.state.visible) {
      return (
        <Swiper
          loop={false}
          index={0}
          contentContainerStyle={styles.wrapper}
          activeDotColor={"#0dc49d"}
        >
          <View style={styles.slide1}>
            <Icon name="list-box" style={styles.icon} />

            <Text style={styles.text}>Choose category that you like</Text>
          </View>
          <View style={styles.slide2}>
            <Icon name="bookmark" style={styles.icon} />
            <Text style={styles.text}>Bookmark articles that you like</Text>
          </View>

          <View style={styles.slide3}>
            <Icon name="notifications" style={styles.icon} />
            <Text style={styles.text}>Get notifications about new topics</Text>

            <Button
              bordered
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.text}>Skip</Text>
            </Button>
          </View>
        </Swiper>
      );
    } else {
      return <View />;
    }
  }
}

const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#494949",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#494949",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#494949",
  },
  text: {
    alignSelf: "center",
    color: "#0dc49d",
    fontSize: 20,
  },
  icon: {
    alignSelf: "center",

    fontSize: 50,
    fontWeight: "bold",
    color: "#0dc49d",
  },
  button: {
    alignSelf: "center",
    marginTop: 15,
    borderColor: "#0dc49d",
  },
};

export default WelcomeScreen;
