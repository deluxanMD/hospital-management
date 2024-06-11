import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "global/theme/theme.slice";
import sidebarSlice from "global/sidebar/sidebar.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    sidebar: sidebarSlice,
  },
});

if (window.Cypress) {
  window.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
