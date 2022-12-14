import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import { Icon } from "@rneui/themed";
import {IngredientsList} from "../components";

const InfoScreen = ({ route, navigation }) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <ImageBackground
          source={{ uri: item.img }}
          resizeMode="cover"
          style={styles.imgBackground}
        >
          <View style={styles.iconsView}>
            <Icon
              name="close"
              color={"#FFFF"}
              type="material-community"
              size={40}
              onPress={() => navigation.navigate("MainScreen")}
            />
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                justifyContent: "flex-end",
              }}
            >
              <Icon
                name="export-variant"
                color={"#FFFF"}
                type="material-community"
                size={40}
              />
              <Icon
                name="heart-outline"
                color={"#FFFF"}
                type="material-community"
                size={40}
              />
            </View>
          </View>
          <View style={styles.viewSeparator}></View>
          <View style={styles.titleView}>
            <Text style={styles.section}>
              {item.recent ? "Recent" : "Trending"}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.viewServing}>
        <Text style={styles.textServing}>Ingredients</Text>
        <Text style={styles.textServing}>
          for {item.recipe.servings} servings
        </Text>
      </View>

      <View style={styles.viewIngredients}>
        <IngredientsList data={item.recipe.ingredients} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
  },
  section: {
    fontSize: 20,
    color: "white",
  },
  title: {
    fontSize: 25,
    color: "white",
  },
  viewImage: {
    width: "100%",
    height: "45%",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    backgroundColor: "black",
  },
  viewServing: {
    width: "100%",
    height: 80,
    backgroundColor: "#282828",
    justifyContent: "center",
  },
  textServing: {
    paddingLeft: 15,
    fontSize: 18,
    color: "white",
  },
  iconsView: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 10,
    paddingRight: 15,
  },
  titleView: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    paddingLeft: 15,
  },
  viewIngredients: {
    height: "60%",
  },
  viewSeparator: {
    height: "60%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});
export default InfoScreen;
