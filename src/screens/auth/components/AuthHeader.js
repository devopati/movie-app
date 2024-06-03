import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { custoomColors } from "../../../colors/custom-colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const AuthHeader = ({ text }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: custoomColors.p_black }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={custoomColors.p_white}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: custoomColors.p_white,
            fontSize: 26,
            fontWeight: "600",
          }}
        >
          {text}
        </Text>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
});
