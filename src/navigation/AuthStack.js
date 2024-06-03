import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authScreens } from "../constants/screen-names";
import { Gateway, Login, Register } from "../screens/auth";
import AuthHeader from "../screens/auth/components/AuthHeader";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={authScreens.GATEWAY_SCREEN}>
      <Stack.Screen
        name={authScreens.REGISTER}
        component={Register}
        options={{
          header: () => <AuthHeader text={"Sign up"} />,
        }}
      />
      <Stack.Screen
        name={authScreens.GATEWAY_SCREEN}
        component={Gateway}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={authScreens.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
