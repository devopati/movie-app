import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { custoomColors } from "../../colors/custom-colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import LanguageBottomSheet from "./components/LanguageBottomSheet";
import { useNavigation } from "@react-navigation/native";
import { authScreens } from "../../constants/screen-names";
import PrimaryButton from "../../components/PrimaryButton";

const Gateway = () => {
  const navigation = useNavigation();

  const [langModalActive, setLangModalActive] = useState(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <LanguageBottomSheet
        langModalActive={langModalActive}
        setLangModalActive={setLangModalActive}
      />
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text
            style={{
              color: custoomColors.p_white,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            MB
            <Text style={{ color: custoomColors.p_yellow, fontSize: 26 }}>
              OO
            </Text>
            KING
          </Text>

          <TouchableOpacity
            style={styles.langbtn}
            onPress={() => setLangModalActive(true)}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Entypo
                name="language"
                size={20}
                color={custoomColors.white_variant}
              />
              <Text style={{ color: custoomColors.p_white }}>English</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.middlecont}>
          <Image
            source={require("../../../assets/images/avengers.jpeg")}
            style={styles.image}
          />

          <View>
            <Text
              style={{
                color: custoomColors.p_white,
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              MBooking hello!
            </Text>
            <Text
              style={{
                color: custoomColors.white_variant,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Enjoy your favourite moovies
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: -10, alignSelf: "center" }}>
            <Entypo
              name="dot-single"
              size={32}
              color={custoomColors.p_yellow}
            />
            <Entypo name="dot-single" size={32} color={custoomColors.p_grey} />
            <Entypo name="dot-single" size={32} color={custoomColors.p_grey} />
          </View>
        </View>

        <View
          style={{
            gap: 24,
            position: "absolute",
            width: "100%",
            bottom: 20,
            alignSelf: "center",
          }}
        >
         <PrimaryButton text={"Sign in"} onPress={() => navigation.navigate(authScreens.LOGIN)}/>

         <PrimaryButton text={"Sign Up"}  onPress={() => navigation.navigate(authScreens.REGISTER)} contstyle={{
                backgroundColor: custoomColors.p_black,
                borderColor: custoomColors.p_white,
                borderWidth: 1,
              }}
              textstyle={{ color: custoomColors.p_white, fontWeight: "600" }}/>

      

          <View>
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
    </SafeAreaView>
  );
};

export default Gateway;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: custoomColors.p_black,
  },
  container: {
    paddingHorizontal: 14,
    gap: 20,
    flex: 1,
    marginTop: 14,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  langbtn: {
    borderColor: custoomColors.white_variant,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  image: {
    width: Dimensions.get("window").width - 60,
    height: 300,
    alignSelf: "center",
  },
  middlecont: {
    gap: 8,
    marginTop: 45,
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
