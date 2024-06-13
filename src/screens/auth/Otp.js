import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { custoomColors } from "../../colors/custom-colors";
import CustomInput from "./components/CustomInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { authScreens } from "../../constants/screen-names";
import PrimaryButton from "../../components/PrimaryButton";

const Otp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: custoomColors.p_yellow,
          fontSize: 35,
          fontWeight: "600",
        }}
      >
        Confirm OTP code
      </Text>
      <Text style={{ color: custoomColors.p_white }}>
        {" "}
        You just need to enter the OTP sent to the registered phone number.....
      </Text>

      <View style={styles.inputCont}>
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />
      </View>
      <PrimaryButton
        text={"Continue"}
        onPress={() => navigation.navigate(authScreens.USERNAME)}
        textstyle={{ fontweight: "600", fontSize: 18 }}
      />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: custoomColors.p_black,
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 8,
    gap: 25,
  },
  text: {
    position: "relative",
    color: custoomColors.p_yellow,
    fontSize: 50,
  },
  inputCont: {
    gap: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
});
