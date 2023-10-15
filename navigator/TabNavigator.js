import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import ProjectScreen from "../screens/ProjectScreen";
import CoursesScreen from "../screens/CoursesScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={34} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Courses"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="open" color={color} size={34} />
          ),
        }}
        component={CoursesScreen}
      />
      <Tab.Screen
        name="Projects"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={34} />
          ),
        }}
        component={ProjectScreen}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
