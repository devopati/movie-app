import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { custoomColors } from '../../../colors/custom-colors';

const Socials = () => {
  return (
    
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
  )
}

export default Socials

const styles = StyleSheet.create({
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
})