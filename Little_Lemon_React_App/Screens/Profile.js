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

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailText] = useState("");
  const [phone, setPhoneText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Wrap each item in TouchableOpacity with padding */}
      <View style={styles.item}>
        <Header />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.touchableRow}>
        <Text style={styles.title}>Personal Information</Text>
        <View style={styles.item}>
          <InputTitleText text={"First Name"} />
          <TextInput
            style={styles.input}
            onChangeText={setFirst}
            value={firstName}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 2 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
        <InputTitleText text={"Last Name"} />
            <TextInput
              style={styles.input}
              onChangeText={setLast}
              value={lastName}
            />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 3 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
        <InputTitleText text={"Email"} />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 1 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
        <CheckBox
              title="Password Changes"
              checked={isChecked}
              onPress={toggleCheckBox}
              checkedColor="green"
              backgroundColor="white"
            />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 2 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
        <CheckBox
              title="Order Statuses"
              checked={isChecked}
              onPress={toggleCheckBox}
              checkedColor="green"
              backgroundColor="white"
            />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 3 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
        <CheckBox
              title="Special Offers"
              checked={isChecked}
              onPress={toggleCheckBox}
              checkedColor="green"
              backgroundColor="white"
            />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 1 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
        <CheckBox
              title="Newsletter"
              checked={isChecked}
              onPress={toggleCheckBox}
              checkedColor="green"
              backgroundColor="white"
            />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 2 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 3 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 1 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 2 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 3 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 1 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 2 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Row 3 clicked")}
        style={styles.touchableRow}
      >
        <View style={styles.item}>
          <Text>Item 3</Text>
        </View>
      </TouchableOpacity>
      {/* Add more items as needed */}
    </ScrollView>
    // <View>
    //   <View style={styles.container}>
    // <View style={styles.item}>
    //   <Header />
    // </View>
    //   </View>
    //   <ScrollView contentContainerStyle={styles.scrollViewContent}>
    //     <View style={styles.container}>
    // <View style={styles.item}>
    //   <Text style={styles.title}>Personal Information</Text>
    //   <InputTitleText text={"First Name"} />
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={setFirst}
    //     value={firstName}
    //   />
            // <InputTitleText text={"Last Name"} />
            // <TextInput
            //   style={styles.input}
            //   onChangeText={setLast}
            //   value={lastName}
            // />

            // <InputTitleText text={"Email"} />
            // <TextInput
            //   style={styles.input}
            //   onChangeText={setEmail}
            //   value={email}
            // />

    //         <InputTitleText text={"Phone Number"} />
    //         <TextInput
    //           style={styles.input}
    //           onChangeText={setPhone}
    //           value={phone}
    //         />
    //         <Text style={styles.title}>Email Notifications</Text>
            // <CheckBox
            //   title="Order Statuses"
            //   checked={isChecked}
            //   onPress={toggleCheckBox}
            //   checkedColor="green"
            //   backgroundColor="white"
            // />
            // <CheckBox
            //   title="Password Changes"
            //   checked={isChecked}
            //   onPress={toggleCheckBox}
            //   checkedColor="green"
            //   backgroundColor="white"
            // />
            // <CheckBox
            //   title="Special Offers"
            //   checked={isChecked}
            //   onPress={toggleCheckBox}
            //   checkedColor="green"
            //   backgroundColor="white"
            // />
            // <CheckBox
            //   title="Newsletter"
            //   checked={isChecked}
            //   onPress={toggleCheckBox}
            //   checkedColor="green"
            //   backgroundColor="white"
            // />
    //       </View>
    //     </View>
    //   </ScrollView>
    // </View>
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
    marginBottom: 10,
    marginTop: 10,
    width: 200,
    paddingHorizontal: 10,
    marginStart: 8,
    borderRadius: 8,
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
});
