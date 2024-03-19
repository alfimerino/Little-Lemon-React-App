import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Screens/Header";
import Onboarding from "./Screens/Onboarding";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Onboarding />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    paddingVertical: 60,
    backgroundColor: 'lightgray'
  },
});
