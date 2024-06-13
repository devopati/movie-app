import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { custoomColors } from "../../../colors/custom-colors";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              color: custoomColors.p_white,
            }}
          >
            Hi,Samuel👋
          </Text>
          <Text
            style={{
              fontSize: 35,
              color: custoomColors.p_white,
            }}
          >
            Welcome Back
          </Text>
        </View>
        <Fontisto name="bell-alt" size={24} color="white" />
      </View>
      <View style={styles.search}>
        <View style={styles.Icon}>
          <Feather name="search" size={24} color="white" />
        </View>
        <TextInput
          style={styles.Input}
          placeholder="Type Here.....
      "
        ></TextInput>
      </View>
      <View style={styles.movie}>
        <Image
          source={require("../../../../assets/images/avengers.jpeg")}
          style={styles.image}
        />
      </View>
      <View style={styles.description}>
        <Text style={{ alignContent: "center" }}>
          <Text
            style={{
              fontSize: 25,
              color: custoomColors.p_white,
            }}
          >
            Avengers-Infinity War
          </Text>
          <Text style={{ color: custoomColors.p_white }}>
            2h49m.Action.Adventure.Sci fic
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: custoomColors.p_black,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  search: {
    padding: 12,
    backgroundColor: custoomColors.p_grey,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 14,
  },
  Icons: {
    size: 20,
  },
  Input: {
    fontSize: 15,
    color: custoomColors.p_white,
  },
  movie: {
    gap: 5,
    marginTop: 30,
  },
  image: {
    width: Dimensions.get("window").width - 60,
    height: 300,
    alignSelf: "center",
  },
});
