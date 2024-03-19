import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  { id: "1", image: require("../assets/Logo.png") },

  // Add more items as needed
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Header() {
  const [firstNameText, setFirstNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const handlePress = () => {
    // Handle button press here
    console.log("submit pressed");
  };

  const handleCompleteOnboarding = async () => {
    try {
      // Update AsyncStorage value to indicate that onboarding is completed
      await AsyncStorage.setItem("onboardingCompleted", "true");
      console.log("Onboarding completed.");
    } catch (error) {
      console.log("Error updating AsyncStorage:", error);
    }
  };

  const validateEmail = () => {
    if (!emailText.trim()) {
      return true;
    }

    if (!emailRegex.test(emailText)) {
      return true;
    }

    return false;
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/Logo.png")} style={styles.header} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Lets get to know you</Text>
        <View style={styles.textFields}>
          <Text style={styles.text}>First Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstNameText}
            onChangeText={setFirstNameText}
          />

          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={emailText}
            onChangeText={setEmailText}
          />
        </View>
      </View>
      <View style={styles.submitButton}>
        <Button
          title="Next"
          onPress={handleCompleteOnboarding}
          color={"black"}
          disabled={firstNameText.length === 0 || validateEmail()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignContent: "center",
  },

  input: {
    width: 250,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 20,
    // paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  bottomContainer: {
    flex: 0.9,
    backgroundColor: "#A0A9B1",
    justifyContent: "center",
    alignItems: "center",
  },

  textFields: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },

  header: {
    height: 60,
    width: 400,
    backgroundColor: "lightgray",
    marginVertical: 20,
    resizeMode: "contain",
  },

  text: {
    fontSize: 25,
    alignContent: "center",
    justifyContent: "center",
  },

  textContainer: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: 20,
    // paddingTop: 60,
    alignSelf: "center",
  },

  title: {
    alignSelf: "center",
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: "600",
  },

  submitButton: {
    width: 100,
    backgroundColor: "#A0A9B1", // Set button border color
    borderRadius: 8,
    alignSelf: "flex-end",
    marginEnd: 20,
    marginTop: 20,
    color: "black",
  },
});
