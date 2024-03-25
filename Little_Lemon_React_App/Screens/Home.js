import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { color } from "react-native-elements/dist/helpers";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json";

export default function Home() {
  const [menuItems, getMenuItems] = useState([]);
  const [menuImages, getImages] = useState([]);

  const getAllMenuItems = async () => {
    try {
      const response = await axios.get(`${url}`);
      const allItems = response.data;
      // Assuming getMenuItems and getImages are functions to set state
      getMenuItems(allItems.menu);
      console.log(menuItems[0]);
    } catch (error) {
      console.error(`Error 11: ${error}`);
    }
  };

  const getImage = async (image) => {
    try {
      const imageURL = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image.image}?raw=true`
      const response = await axios.get(url)
    } catch (error) {
      console.log('image error ' + error)
    }
  }

  useEffect(() => {
    getAllMenuItems();
  }, []);

  const renderItem = ({ item }) => {
    const imageURL = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`
    return (
      <View style={styles.menuItemContainer}>
        <Text>{item.name}</Text>
        <View style={styles.menuRow}>
        <Text style={{ width: 250}}>{item.description}</Text>
        <Image source={{uri: imageURL}} style={styles.menuImage}/>
        </View>
        <Text>{item.price}</Text>
        <View style={styles.line}></View>
      </View>
    );
  };

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
          <View style={styles.magImageContainer}>
            <Ionicons name="search-outline" size={22} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitleText}>ORDER FOR DELIVERY!</Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainerStyle}>
            <Button
              title="Starters"
              onPress={{}}
              color={"lightgray"}
              borderRadius={40}
            />
          </View>
          <View style={styles.buttonContainerStyle}>
            <Button
              title="Mains"
              onPress={{}}
              color={"lightgray"}
              borderRadius={40}
            />
          </View>
          <View style={styles.buttonContainerStyle}>
            <Button
              title="Desserts"
              onPress={{}}
              color={"lightgray"}
              borderRadius={40}
            />
          </View>
          <View style={styles.buttonContainerStyle}>
            <Button
              title="Drinks"
              onPress={{}}
              color={"lightgray"}
              borderRadius={40}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={menuItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heroSection: {
    flex: 0.4,
    flexDirection: "row",
    backgroundColor: "#394C45",
  },

  heroTitle: {
    fontSize: 40,
    color: "#F1C613",
    marginStart: 10,
  },

  subHeader: {
    color: "#EFEFEF",
    fontSize: 25,
    marginStart: 10,
  },

  heroParagraph: {
    width: 180,
    height: 100,
    marginTop: 10,
    marginHorizontal: 10,
    marginEnd: 30,
    fontSize: 15,
    color: "#EFEFEF",
    // backgroundColor: 'orange',
  },

  heroParagraphRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 120,
  },

  image: {
    resizeMode: "contain",
    height: 130,
    width: 130,
    borderRadius: 30,
  },

  magImageContainer: {
    backgroundColor: "white",
    borderRadius: 80,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginStart: 10,
  },

  mainContainer: {
    flex: 0.6,
    // backgroundColor: 'orange',
    paddingStart: 10,
    paddingEnd: 10,
  },

  mainTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonRow: {
    flexDirection: "row",
    paddingTop: 8,
    // backgroundColor: "orange",
  },

  buttonContainerStyle: {
    width: 86,
    height: 40,
    borderRadius: 40,
    marginHorizontal: 4,
    marginEnd: 4,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "gray",
    marginTop: 20,
  },

  flatListContainer: {
    // backgroundColor: "orange",
    flex: 0.97,
    marginTop: 10,
  },

  menuImage: {
    resizeMode: "contain",
    height: 80,
    width: 80,
    marginLeft: 30
  },

  menuItemContainer: {
    // marginBottom: 20,
  },

  menuRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  }
});
