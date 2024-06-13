import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { bottomTabs } from "../constants/screen-names";
import {
  Home,
  Movie,
  Profile,
  Ticket,
} from "../screens/main-screens/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { custoomColors } from "../colors/custom-colors";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ size, color, focused }) => {
          if (route.name === bottomTabs.HOME)
            return focused ? (
              <Ionicons name="home" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            );

          if (route.name === bottomTabs.TICKET)
            return focused ? (
              <MaterialCommunityIcons
                name="ticket-confirmation"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                size={size}
                color={color}
              />
            );

          if (route.name === bottomTabs.MOVIE)
            return focused ? (
              <MaterialCommunityIcons
                name="movie-open-play"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-open-play-outline"
                size={size}
                color={color}
              />
            );

          if (route.name === bottomTabs.PROFILE)
            return focused ? (
              <FontAwesome name="user" size={size} color={color} />
            ) : (
              <FontAwesome name="user-o" size={size} color={color} />
            );
        },
        tabBarStyle: {
          backgroundColor: custoomColors.p_black,
        },
        tabBarActiveTintColor: custoomColors.p_yellow,
      })}
    >
      <Tab.Screen name={bottomTabs.HOME} component={Home} />
      <Tab.Screen name={bottomTabs.TICKET} component={Ticket} />
      <Tab.Screen name={bottomTabs.MOVIE} component={Movie} />
      <Tab.Screen name={bottomTabs.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
