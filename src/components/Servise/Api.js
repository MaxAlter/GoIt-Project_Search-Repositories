import axios from "axios";

export const searchRepo = (query = "react", page = 1, per_page = 20) =>
  axios.get(
    `https://api.github.com/search/repositories?name&q=${query}&page=${page}&per_page=${per_page}`
  );
