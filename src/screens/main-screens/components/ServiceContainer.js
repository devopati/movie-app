import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceContainer = () => {
  return (
    <View style={styles.container}>
      <image
        style={styles.image}
        source={require("../../../../assets/mubi.png")}
      />
      <Text>ServiceContainer</Text>
    </View>
  );
};

export default ServiceContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
  },
  image: {},
});
