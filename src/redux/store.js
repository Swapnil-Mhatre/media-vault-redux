import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice.js";
import collectionsReducer from "./features/collectionSlice.js";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collections: collectionsReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "collection",
    JSON.stringify(store.getState().collections.items),
  );
});
