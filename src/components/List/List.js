import React, { useState } from "react";
import { connect } from "react-redux";
import { Pagination } from "@material-ui/lab";
import ListItems from "./ListItems";
import style from "./List.module.css"

const List = ({ items = [], loading }) => {
  let [currentPage, setCurrentPage] = useState(1);

  const perPage = 3;

  const pageCount = Math.ceil(items.length / perPage);
  const firstIdx = (currentPage - 1) * perPage;
  const lastIdx = firstIdx + perPage;

  const currentItems = items.slice(firstIdx, lastIdx);

  const handlePaginationChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {loading === true && <h2>Loading.......</h2>}
      {!loading && currentItems.length === 0 ? (
        <h1>По Вашому запиту не знайдено жодного репозиторія</h1>
      ) : (
        <ListItems currentItems={currentItems} />
      )}
      <div className={style.pagination}>
        <Pagination
          shape="rounded"
          size="large"
          color="primary"
          variant="outlined"
          count={pageCount}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

const MSTP = (state) => ({
  items: state.repository.items,
  loading: state.repository.loading,
});

export default connect(MSTP, null)(List);
