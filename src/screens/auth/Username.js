import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { custoomColors } from "../../colors/custom-colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import PrimaryButton from "../../components/PrimaryButton";
import { bottomTabs } from "../../constants/screen-names";
import { useNavigation } from "@react-navigation/native";

const Username = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text
          style={{
            color: custoomColors.p_yellow,
            fontSize: 40,
            fontWeight: "400",
          }}
        >
          Enter Username
        </Text>
        <Text
          style={{
            color: custoomColors.p_white,
          }}
        >
          Latin characters,no emoji/symbols...
        </Text>
        <View>
          <TextInput
            style={styles.input}
            cursorColor={custoomColors.p_white}
            placeholder="Enter username"
          ></TextInput>
        </View>
        <PrimaryButton
          text="Done"
          textstyle={{ fontSize: 18, fontWeight: 600 }}
          onPress={() => navigation.navigate(bottomTabs.HOME)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Username;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: custoomColors.p_black,
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
    flex: 1,
    gap: 20,
  },
  input: {
    borderBottomWidth: 1.4,
    borderBottomColor: custoomColors.p_grey,
    fontSize: 24,
    paddingVertical: 14,
    paddingLeft: 25,
    fontWeight: "600",
    color: custoomColors.p_white,
  },
});
