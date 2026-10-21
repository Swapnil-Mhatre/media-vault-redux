import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    items: JSON.parse(localStorage.getItem("collection")) || [],
  },
  reducers: {
    addCollection(state, action) {
      state.items.push(action.payload);
    },
    removeCollection(state, action) {
      const index = state.items.findIndex(
        (collection) => collection.id === action.payload.id,
      );
      if (index === -1) return;
      state.items.splice(index, 1);
    },
  },
});

export const { addCollection, removeCollection } = collectionSlice.actions;
export default collectionSlice.reducer;
