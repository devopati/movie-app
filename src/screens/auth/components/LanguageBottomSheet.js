import { StyleSheet, View, Text } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { custoomColors } from "../../../colors/custom-colors";

const LanguageBottomSheet = ({
  langModalActive = true || false,
  setLangModalActive,
}) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["48%", "48%"], []);

  const handlePresentModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  useEffect(() => {
    if (langModalActive) return handlePresentModal();
    bottomSheetRef.current.close();
  }, [langModalActive]);
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={0}
      onDismiss={() => setLangModalActive(false)}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          onPress={() => {
            setLangModalActive(false);
            bottomSheetRef.current.close();
          }}
        />
      )}
      handleIndicatorStyle={{ backgroundColor: "#1A1A1A" }}
      handleStyle={{
        backgroundColor: "#1A1A1A",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
      style={{ backgroundColor: custoomColors.p_black }}
    >
      <BottomSheetView style={styles.container}>
        <Text>kjgdbjhkrbgdvjhremb</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
});
