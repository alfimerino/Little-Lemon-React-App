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

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.heroSection}>
        <View>
        <Text>Little Lemon</Text>
        <Text>Chicago</Text>
        <Text style={styles.heroParagraph}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
modern twist.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    heroSection: {
        flex: .5,
        flexDirection: 'row',
        backgroundColor: '#394C45'
    },
    heroParagraph: {
        width: 100,
        marginTop: 10,
    }

});
