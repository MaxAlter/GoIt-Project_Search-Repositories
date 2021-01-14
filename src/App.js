import React, { Component } from "react";
import List from "./components/List/List";
import SearchBox from "./components/SearchBox/SearchBox";
import style from "./App.module.css";


import { connect } from "react-redux";
import * as operations from "./Redux/Operations/operations";

class App extends Component {
  componentDidMount() {
    this.props.searchRepositiries();
  }

  render() {
    return (
      <div className={style.container}>
        <SearchBox />
        <List />
      </div>
    );
  }
}

const MDTP = {
  searchRepositiries: operations.getAllRepositories,
};

export default connect(null, MDTP)(App);
