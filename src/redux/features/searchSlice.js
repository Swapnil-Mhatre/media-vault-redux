import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, actions) {
      state.query = actions.payload;
    },
    setActiveTab(state, actions) {
      state.activeTab = actions.payload;
    },
    setResults(state, actions) {
      state.loading = false;
      state.results = actions.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, actions) {
      state.error = actions.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const { setQuery, setActiveTab, setResults, setLoading, setError } =
  searchSlice.actions;
export default searchSlice.reducer;
