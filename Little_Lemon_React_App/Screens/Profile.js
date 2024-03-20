import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailText] = useState("");
  const [phone, setPhoneText] = useState("");
  const onPress = () => {
    console.log("tapped");
  };

  const setFirst = (value) => {
    setFirstName(value);
  };

  const setLast = (value) => {
    setLastName(value);
  };

  const setEmail = (value) => {
    setEmailText(value);
  };

  const setPhone = (value) => {
    setPhoneText(value);
  };


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Header />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.title}>Personal Information</Text>
          <InputTitleText text={"First Name"} />
          <TextInput
            style={styles.input}
            onChangeText={setFirst}
            value={firstName}
          />
          <InputTitleText text={"Last Name"} />
          <TextInput
            style={styles.input}
            onChangeText={setLast}
            value={lastName}
          />

          <InputTitleText text={"Email"} />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />

          <InputTitleText text={"Phone Number"} />
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
          />
          <Text style={styles.title}>Email Notifications</Text>
        </View>
      </View>
    </View>
  );
}

const FormTextInput = ({ title, onChangeText, value }) => {
  return (
    <TextInput style={styles.input} onChangeText={onChangeText} value={value} />
  );
};

const IconButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Ionicons name="arrow-back-circle" size={24} color="green" />
    </TouchableOpacity>
  );
};

const InputTitleText = ({ text }) => {
  return <Text style={styles.textInput}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children horizontally
    // justifyContent: 'space-between', // Distribute children evenly along the main axis
    alignItems: "center", // Align children vertically
    // padding: 10,
    // backgroundColor: 'lightgray',
  },

  title: {
    fontSize: 18,
    paddingLeft: 8,
    fontWeight: "bold",
  },

  textInput: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 8,
  },

  item: {
    flex: 1, // Each item takes up equal space within the row
    backgroundColor: "white",
    // margin: 5,
    // padding: 10,
    // borderRadius: 5,
    alignItems: "flex-start",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    width: 200,
    paddingHorizontal: 10,
    marginStart: 8,
    borderRadius: 8,
  },
});
