import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RegularText = ({
  children,
  textStyle,
  numberOfLines,
  ellipsizeMode,
  allowFontScaling,
}) => {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        allowFontScaling={allowFontScaling}
        style={[styles.text, textStyle]}
      >
        {...children}
      </Text>
    </View>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});
