import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
import { getAllRepositories } from "../Operations/operations";

const repositoryReduser = createSlice({
  name: "repositoryReduser",
  initialState: { items: [], loading: false, error: null },
  extraReducers: {
    [getAllRepositories.pending]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getAllRepositories.fulfilled]: (state, action) => ({
      ...state,
      items: action.payload,
      loading: false,
    }),
    [getAllRepositories.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export default repositoryReduser.reducer;
