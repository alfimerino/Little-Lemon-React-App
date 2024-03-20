import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  { id: "1", image: require("../assets/Logo.png") },

  // Add more items as needed
];

const ImageButton = ({ onPress, imageSource, imageStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={imageSource} style={[styles.buttonImage, imageStyle]} />
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.imageButtonContainer}>
    <Image source={require("../assets/Logo.png")} style={styles.image} />
    <ImageButton
      onPress={console.log("pressed")}
      imageSource={require("../assets/Profile.png")} // Adjust the path to your image file
      imageStyle={styles.customImageStyle} // Add custom styles to the image if needed
    />
  </View>
);

export default function Header() {
  const handlePress = () => {
    // Handle button press here
  };
  return (
    <View style={styles.itemContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={StyleSheet.listContainer}
      />
    </View>
  );
}

const BUTTON_SIZE = 60;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginRight: 40,
  },

  buttonImage: {
    width: 60, // Adjust image size as needed
    height: 60, // Adjust image size as needed
    resizeMode: "contain",
  },

  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "baseline",
  },
  imageButtonContainer: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center",
    justifyContent: "flex-end",

  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "top",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "top",
  },
});
