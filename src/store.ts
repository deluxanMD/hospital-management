import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "global/theme/theme.slice";
import sidebarSlice from "global/sidebar/sidebar.slice";
import { pokemonApi } from "api/fake/fake-api";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    sidebar: sidebarSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

if (window.Cypress) {
  window.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
