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



// import { Raleway_200ExtraLight } from "@expo-google-fonts/raleway";
// import { Quicksand_300Light } from "@expo-google-fonts/quicksand";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.heroSection}>
        <View>
          <Text style={styles.heroTitle}>Little Lemon</Text>
          <Text style={styles.subHeader}>Chicago</Text>
          <View style={styles.heroParagraphRow}>
            <Text style={styles.heroParagraph}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
            <Image
              source={require("../assets/bread.jpg")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  heroSection: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#394C45",
  },
  heroParagraph: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginHorizontal: 10,
    fontSize: 20,
    color: "#EFEFEF",
  },

  heroParagraphRow: {
    flexDirection: "row",
    alignItems: "baseline",
    fontFamily: "PT Serif",
  },

  subHeader: {
    color: "#EFEFEF",
    fontSize: 30,
    fontFamily: "PT Serif",
  },
  heroTitle: {
    fontSize: 50,
    color: "#F1C613",
    fontFamily: "PT Serif",
  },

  image: {
    resizeMode: "contain",
    height: 160,
    width: 160,
    borderRadius: 30,
  },
});
