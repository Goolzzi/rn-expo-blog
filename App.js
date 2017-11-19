import React from "react";
import { Provider } from 'mobx-react';
import {Asset, AppLoading} from "expo";
import { DrawerNavigator, StackNavigator} from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import PostScreen from "./screens/PostScreen";
import ContactScreen from "./screens/ContactScreen";
import PriceScreen from "./screens/PriceScreen";
import ForgetpassScreen from "./screens/ForgetpassScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ThankyouScreen from "./screens/ThankyouScreen";
import DrawerContent from "./components/DrawerContent";

import store from './store';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appIsReady: false,
      mainApplication: false,
    };
  }
  async componentWillMount() {
    this._loadFontsAsync();
    this._cacheResourcesAsync();
  }
  async _cacheResourcesAsync() {
    const images = [
      require("./assets/icons/app.png"),
      require("./assets/icons/loading.png"),
      require("./img/img1.jpg"),
      require("./img/img2.jpg"),
      require("./img/img3.jpg"),
      require("./img/img4.jpg"),
      require("./img/img5.jpg"),
      require("./img/img6.jpg"),
      require("./img/img7.jpg"),
    ];
    for (let image of images) {
      await Asset.fromModule(image).downloadAsync();
    }
  }
  /* Fonts needs to be loaded in before the app can start
    ** so can use Expo.Font.loadAsync to load any assets
    */
  async _loadFontsAsync() {
    await Expo.Font.loadAsync({
      Arial: require("native-base/Fonts/Roboto.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({appIsReady: true});
  }
  render() {
    if (this.state.appIsReady) {
      return (
        <Provider {...store}>
          <Main/>
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
const Drawer = DrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Settings: {screen: SettingsScreen},
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left",
    disableOpenGesture: true,
    contentComponent: props => <DrawerContent {...props} />,
    contentOptions: {
      inactiveTintColor: "#0dc49d",
      activeBackgroundColor: "#383838",
      activeTintColor: "#0dc49d",
    },
  },
);
const Main = StackNavigator(
  {
    Contact: {screen: ContactScreen},
    Post: {screen: PostScreen},
    Signin: {screen: SigninScreen},
    Signup: {screen: SignupScreen},
    Forgetpass: {screen: ForgetpassScreen},
    Price: {screen: PriceScreen},
    Checkout: {screen: CheckoutScreen},
    Thankyou: {screen: ThankyouScreen},
    Drawer: {screen: Drawer},
    Welcome: {screen: WelcomeScreen},
  },
  {
    initialRouteName: "Signin",
    headerMode: "none",
  },
);
