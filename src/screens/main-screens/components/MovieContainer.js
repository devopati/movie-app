import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import { custoomColors } from "../../../colors/custom-colors";

const MovieContainer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/avatar.jpeg")}
        style={styles.image}
      />
      <Text style={{ color: custoomColors.p_yellow, fontWeight: "700" }}>
        Avatar 2: The way of Water
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <MaterialCommunityIcons
          name="movie-open-play"
          size={18}
          color={custoomColors.p_grey}
        />
        <Text style={{ color: custoomColors.p_grey }}>Adventure, Sci-fi</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <EvilIcons name="calendar" size={20} color={custoomColors.p_grey} />
        <Text style={{ color: custoomColors.p_grey }}>20.12.2022</Text>
      </View>
    </View>
  );
};

export default MovieContainer;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2.86,
    gap: 5,
  },
  image: {
    height: 150,
    width: 150,
  },
});
