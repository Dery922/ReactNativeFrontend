import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          headerShown={false}
          component={SectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
