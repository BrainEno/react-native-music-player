import {
  Entypo,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/LibaryScreen";
import { AlbumScreen } from "../screens/AlbumScreen";
import {
  BottomTabParamList,
  TabFourParamList as PremuimParamList,
  TabOneParamList as HomeParamList,
  TabThreeParamList as LibraryParamList,
  TabTwoParamList as SearchParamList,
} from "../types";
import { SeachScreen } from "../screens/SeachScreen";
import { PremiumScreen } from "../screens/PremiumScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='首页'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='首页'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name='home'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='探索'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name='search'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='乐库'
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='library-music-outline'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='我的'
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='view-dashboard-outline'
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerTitle: "首页" }}
      />
      <HomeStack.Screen
        name='AlbumScreen'
        component={AlbumScreen}
        options={{ headerTitle: "专辑" }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchScreen'
        component={SeachScreen}
        options={{ headerTitle: "搜索" }}
      />
    </SearchStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name='LibraryScreen'
        component={LibraryScreen}
        options={{ headerTitle: "乐库" }}
      />
    </LibraryStack.Navigator>
  );
}

const PremiumStack = createStackNavigator<PremuimParamList>();

function PremiumNavigator() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name='PremiumScreen'
        component={PremiumScreen}
        options={{ headerTitle: "搜索" }}
      />
    </PremiumStack.Navigator>
  );
}
