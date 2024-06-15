import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { custoomColors } from "../../../colors/custom-colors";
import MovieContainer from "./MovieContainer";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../../redux/slices/appSlice";

const SeeAll = ({ initial }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.contaiiner}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.commingSoon}>{initial}</Text>
        <TouchableOpacity onPress={() => dispatch(setIsLoggedIn(false))}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ color: custoomColors.p_yellow }}>See all</Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={custoomColors.p_yellow}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeeAll;

const styles = StyleSheet.create({
  contaiiner: {
    gap: 20,
  },
  commingSoon: {
    color: custoomColors.p_white,
    fontWeight: "600",
    fontSize: 18,
  },
  scrollview: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    gap: 14,
  },
});
