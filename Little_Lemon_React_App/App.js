import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Screens/Header";
import Onboarding from "./Screens/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "./Screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState({
    isLoading: true,
    isOnboardingCompleted: false,
  });

  useEffect(() => {
    checkOnboardingStatus();
  });

  const checkOnboardingStatus = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem(
        "onboardingCompleted"
      );
      if (onboardingCompleted === "true") {
        setState({ isLoading: false, isOnboardingCompleted: true });
      } else {
        setState({ isLoading: false, isOnboardingCompleted: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (state.isLoading) {
    console.log("Loading");
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    paddingVertical: 60,
    backgroundColor: "lightgray",
  },
});
