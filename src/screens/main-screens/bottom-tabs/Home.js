import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { custoomColors } from "../../../colors/custom-colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather, Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import CommingSoon from "../components/CommingSoon";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, gap: 15 }}>
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
          <Text>
            <Text
              style={{
                fontSize: 25,
                color: custoomColors.p_white,
              }}
            >
              Avengers-Infinity War
            </Text>
          </Text>

          <Text style={{ color: custoomColors.p_white }}>
            2h49m.Action.Adventure.Sci fic
          </Text>

          <View style={styles.ratecont}>
            <Entypo name="star" size={18} color={custoomColors.p_yellow} />
            <Text style={styles.ratetext}>
              4.8{" "}
              <Text style={{ color: custoomColors.p_grey, fontSize: 12 }}>
                (1.222)
              </Text>
            </Text>
          </View>
        </View>

        <CommingSoon />
      </ScrollView>
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
  description: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  ratecont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  ratetext: {
    color: custoomColors.p_white,
    fontWeight: "500",
  },
});
