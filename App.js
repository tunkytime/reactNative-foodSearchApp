import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import SeeMoreDetail from "./src/screens/SeeMoreDetail";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    SeeMore: SeeMoreDetail
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
