import { configureStore } from "@reduxjs/toolkit";
import favoriteReposReducer from "./favorited";
import userReducer from "./user";

export default configureStore({
  reducer: {
    favoriteRepos: favoriteReposReducer,
    user: userReducer,
  },
});
