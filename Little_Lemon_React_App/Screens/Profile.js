import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { color } from "react-native-elements/dist/helpers";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailText] = useState("");
  const [phone, setPhoneText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);

  const data = [];

  const onPress = () => {
    console.log("tapped");
  };

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getUserData = async () => {
    try {
      const firstNameText = await AsyncStorage.getItem("firstName");
      setFirstName(firstNameText);
      const lastNameText = await AsyncStorage.getItem("lastName");
      setLastName(lastNameText);
      const emailText = await AsyncStorage.getItem("email");
      setEmail(emailText);
    } catch (error) {
      console.log(error);
    }
  };

  const ImageButton = ({ onPress, imageSource, imageStyle }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={imageSource} style={[styles.buttonImage, imageStyle]} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      <View style={styles.item}>
        <Header />
      </View>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.item}>
        <InputTitleText text={"Avatar"} />
        <View style={styles.avatarRow}>
          <View
            style={{ flex: 1, alignItems: "flex-start", justifyContent: "center" }}
          >
            <TouchableOpacity onPress={pickImage} style={styles.button}>
              {image ? (
                <Image source={{ uri: image }} style={[styles.image]} />
              ) : (
                <View style={{}}>
                  <Text style={{ color: "white", fontSize: 24 }}>
                    {firstName ? firstName.charAt(0) : "JD"}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.greenButton}>
            <Button
              title="Change"
              onPress={console.log("tapped")}
              color={"#394C45"}
            />
          </View>
          <View style={styles.greenButton}>
            <Button
              title="Remove"
              onPress={console.log("tapped")}
              color={"gray"}
            />
          </View>
        </View>
        <InputTitleText text={"First Name"} />
        <TextInput
          style={styles.input}
          onChangeText={setFirst}
          value={firstName}
        />
      </View>
      <View style={styles.item}>
        <InputTitleText text={"Last Name"} />
        <TextInput
          style={styles.input}
          onChangeText={setLast}
          value={lastName}
        />
      </View>
      <View style={styles.item}>
        <InputTitleText text={"Email"} />
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      </View>
      <View style={styles.item}>
        <CheckBox
          title="Password Changes"
          checked={isChecked}
          onPress={toggleCheckBox}
          checkedColor="green"
          backgroundColor="white"
        />
      </View>
      <View style={styles.item}>
        <CheckBox
          title="Order Statuses"
          checked={isChecked}
          onPress={toggleCheckBox}
          checkedColor="green"
          backgroundColor="white"
        />
      </View>
      <View style={styles.item}>
        <CheckBox
          title="Special Offers"
          checked={isChecked}
          onPress={toggleCheckBox}
          checkedColor="green"
          backgroundColor="white"
        />
      </View>
      <View style={styles.item}>
        <CheckBox
          title="Newsletter"
          checked={isChecked}
          onPress={toggleCheckBox}
          checkedColor="green"
          backgroundColor="white"
        />
        <Button
          title="Log out"
          onPress={console.log("tapped")}
          style={styles.yellowButton}
          color={"#F1C613"}
        />
      </View>
      <View style={styles.avatarRow}>
        <View style={styles.greenButton}>
          <Button
            title="Change"
            onPress={console.log("tapped")}
            color={"#394C45"}
          />
        </View>
        <View style={styles.greenButton}>
          <Button
            title="Remove"
            onPress={console.log("tapped")}
            color={"gray"}
          />
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
  title: {
    fontSize: 18,
    paddingLeft: 8,
    fontWeight: "bold",
    backgroundColor: "white",
  },

  textInput: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 8,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    // marginBottom: 2,
    // marginTop: 2,
    width: 200,
    paddingHorizontal: 10,
    marginStart: 8,
    borderRadius: 8,
  },

  avatarRow: {
    flexDirection: "row",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 20,
    backgroundColor: "lightblue",
    justifyContent: "top",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "top",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  item: {
    marginLeft: 6,
    justifyContent: "top",
    backgroundColor: "white",
  },

  buttonImage: {
    width: 60, // Adjust image size as needed
    height: 60, // Adjust image size as needed
    resizeMode: "contain",
  },

  greenButton: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginLeft: 12,
    marginTop: 8,
  },

  yellowButton: {
    width: 110,
    height: 40,
  },

  placeholderImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    backgroundColor: "#CCCCCC",
  },

  button: {
    width: 60, // Adjust image size as needed
    height: 60, // Adjust image size as needed
    resizeMode: "contain",
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
