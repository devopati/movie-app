import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const { isLoggedIn, showLanguageModal } = useSelector((state) => state.app);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
