import React, { useState } from "react";
import { connect } from "react-redux";
import * as operations from "../../Redux/Operations/operations";
import style from "./search.module.css";

const SearchBox = ({ getAllRepositories }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query === "") {
      getAllRepositories();
    }
    if (query !== "") {
      getAllRepositories(query);
    }
  };

  return (
    <>
      <header className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            className={style.input}
            onChange={handleChange}
            value={query}
            type="text"
            size="28"
            autoComplete="off"
            placeholder="Search press Enter"
          />
        </form>
      </header>
    </>
  );
};

const MDTP = {
  getAllRepositories: operations.getAllRepositories,
};

export default connect(null, MDTP)(SearchBox);
