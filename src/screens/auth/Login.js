import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import { authScreens } from "../../constants/screen-names";
import { TextInput } from "react-native-gesture-handler";
import { custoomColors } from "../../colors/custom-colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Socials from "./components/Socials";
import PrimaryButton from "../../components/PrimaryButton";

const Login = () => {
  const { value,setValue } = useState("");
  return ( 
<KeyboardAvoidingView style={{flex:1}}>
<View style={styles.container}>
      <View style={{ gap:50 }}>
        <View>
          <TextInput
            style={styles.input}
            value={value}
            cursorColor={custoomColors.white_variant}
            placeholder= "Enter your username"
            placeholderTextColor={custoomColors.p_white}
            />
        <View>
          <TextInput
            style={styles.input}
            value={value}
            cursorColor={custoomColors.white_variant}
            placeholder= "Enter Password" 
            placeholderTextColor={custoomColors.p_white}
            secureTextEntry
            />
            </View>
        </View>
 <PrimaryButton text={"Login"} />
      </View>
      <Socials/>
    </View>
</KeyboardAvoidingView>
  );
};

export default Login;

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
  
  button: {
    backgroundColor: custoomColors.p_yellow,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
  },

});
