import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Home from "@/screens/Home";
import Mall from "@/screens/Mall";
import ComingSoon from "@/screens/ComingSoon";
import { colors } from "@/theme";

const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: "Home",
    component: Home,
    icon: require("@assets/navIconHome.png"),
    w: 25,
    h: 26.5,
  },
  {
    name: "Mall",
    component: Mall,
    icon: require("@assets/navIconMall.png"),
    w: 28,
    h: 28,
  },
  {
    name: "Discover",
    component: ComingSoon,
    icon: require("@assets/navIconDiscover.png"),
    w: 28,
    h: 34,
  },
  {
    name: "Inbox",
    component: ComingSoon,
    icon: require("@assets/navIconInbox.png"),
    w: 25,
    h: 27.5,
  },
  {
    name: "Account",
    component: ComingSoon,
    icon: require("@assets/navIconAccount.png"),
    w: 20,
    h: 25,
  },
];

function Tabs() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryDark,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: { fontFamily: "sans-serif", fontSize: 10 },
        tabBarStyle: {
          height: 62 + bottom,
          paddingTop: 6,
          paddingBottom: 8 + bottom,
        },
      }}
    >
      {TABS.map(({ name, component, icon, w, h }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabel: name.toUpperCase(),
            tabBarIcon: ({ color }) => (
              <Image
                source={icon}
                style={{ width: w, height: h, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
