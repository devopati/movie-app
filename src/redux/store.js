import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appSlice from "./slices/appSlice";

const persistConfig = {
  key: "mykey",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["isLoggedIn"],
};

const rootReducer = combineReducers({
  app: persistReducer(persistConfig, appSlice),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { store, persistor };
