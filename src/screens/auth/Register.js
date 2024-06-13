import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { custoomColors } from "../../colors/custom-colors";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";
import { authScreens } from "../../constants/screen-names";
import Socials from "./components/Socials";


const Register = () => {
  const navigation = useNavigation();
  const { value, setValue } = useState("");
  return (
    <View style={styles.container}>
      <View style={{ gap: 34 }}>
        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            value={value}
            // onChangeText={(text) => setValue(text)}
            cursorColor={custoomColors.white_variant}
            placeholder="Enter your phone number"
            placeholderTextColor={custoomColors.p_grey}
          />

          <View style={styles.icon}>
            <Feather name="phone" size={24} color={custoomColors.p_white} />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(authScreens.OTP)}
        style={[
          styles.button,
          {
            backgroundColor: custoomColors.p_yellow,
            borderColor: custoomColors.p_white,
            borderWidth: 1,
          },
        ]}
        >
      <Text style={{ fontWeight: "600" }}>Continue</Text>
        </TouchableOpacity>
      </View>

<Socials/>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    backgroundColor: custoomColors.p_black,
    flex: 1,
  },
  input: {
    borderBottomWidth: 1.4,
    borderBottomColor: custoomColors.p_grey,
    fontSize: 24,
    paddingVertical: 14,
    paddingLeft: 38,
    fontWeight: "600",
    color: custoomColors.p_white,
  },
  icon: {
    position: "absolute",
    top: "30%",
  },
  button: {
    backgroundColor: custoomColors.p_yellow,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
  },

});
