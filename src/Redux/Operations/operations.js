import { searchRepo } from "../../../src/components/Servise/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRepositories = createAsyncThunk(
  "fetchRepositiries",
  async (query, thunkApi) =>
    searchRepo(query)
      .then((res) => res.data.items)
      .catch((error) => thunkApi.rejectWithValue(error))
);
