import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  open: boolean;
}

const initialState: ThemeState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setOpen, toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
