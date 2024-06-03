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

const Register = () => {
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

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "600" }}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomview}>
        <View style={{ position: "relative" }}>
          <View style={styles.line} />
          <View
            style={{
              position: "absolute",
              top: -9,
              backgroundColor: custoomColors.p_black,
              alignSelf: "center",
              paddingHorizontal: 9,
            }}
          >
            <Text style={{ color: custoomColors.white_variant, fontSize: 16 }}>
              Or continue with
            </Text>
          </View>
        </View>

        <Pressable
          style={[styles.socials, { marginTop: 15 }]}
          onPress={() => Linking.openURL("https://m.facebook.com")}
        >
          <FontAwesome name="facebook" size={24} color={"#337FFF"} />
          <Text
            style={{
              color: custoomColors.p_white,
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Facebook
          </Text>
        </Pressable>

        <Pressable style={styles.socials}>
          <FontAwesome5
            name="google"
            size={22}
            color={custoomColors.white_variant}
          />
          <Text
            style={{
              color: custoomColors.p_white,
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Google
          </Text>
        </Pressable>

        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              color: custoomColors.p_grey,
              textAlign: "center",
              marginHorizontal: 15,
            }}
          >
            By signing in or sign up you agree to our terms of service and
            privacy policy
          </Text>
        </View>
      </View>
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
  bottomview: {
    position: "absolute",
    gap: 24,
    width: "100%",
    bottom: 30,
    alignSelf: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: custoomColors.p_grey,
  },
  socials: {
    flexDirection: "row",
    gap: 13,
    backgroundColor: "#1A1A1A",
    paddingVertical: 12,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 36,
    alignItems: "center",
  },
});
