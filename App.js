import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootNavigation from "./src/navigation/RootNavigation";
import { StatusBar } from "expo-status-bar";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <RootNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
