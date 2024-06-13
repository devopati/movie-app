import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  showLanguageModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setShowLanguageModal: (state, action) => {
      state.showLanguageModal = action.payload;
    },
  },
});

export const { setIsLoggedIn, setShowLanguageModal } = appSlice.actions;

export default appSlice.reducer;
