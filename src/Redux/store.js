import { configureStore } from "@reduxjs/toolkit";
import repositoryReduser from "./Redusers/reduser";

const store = configureStore({
  reducer: {
    repository: repositoryReduser,
  },
});

export default store;
