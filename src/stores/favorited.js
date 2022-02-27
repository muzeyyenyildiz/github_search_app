import { createSlice } from "@reduxjs/toolkit";

export const favoriteRepos = createSlice({
  name: "favoriteRepos",
  initialState: {
    value: [],
  },
  reducers: {
    setFavoriteRepos: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { setFavoriteRepos } = favoriteRepos.actions;

export default favoriteRepos.reducer;
