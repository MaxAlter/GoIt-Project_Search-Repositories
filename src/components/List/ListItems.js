import React from "react";
import style from "./listItems.module.css";

const ListItems = ({ currentItems }) => {
  return (
    <>
      <ul className={style.list}>
        {currentItems.map((item) => (
          <li key={item.id} className={style.list_item}>
            <img
              width="100px"
              height="100px"
              src={item.owner.avatar_url}
              className={style.avatarImg}
            ></img>

            <ul className={style.exposition_name}>
              <li className={style.list_name}>
                <p className={style.list_name_item}>Repo name:</p>
                <p className={style.item_name}>{item.full_name}</p>
              </li>
              <li className={style.list_login}>
                <p className={style.list_login_item}>Author:</p>
                <p className={style.item_login}>{item.owner.login}</p>
              </li>
              <li className={style.list_language}>
                <p className={style.list_language_item}>Language:</p>
                <p className={style.item_language}>{item.language}</p>
              </li>
              <li className={style.list_description}>
                <p className={style.list_description_item}>Description:</p>
                <p className={style.item_description}>{item.description}</p>
              </li>
            </ul>
            <ul className={style.exposition_like}>
              <li className={style.list_watchers}>{item.watchers} stars</li>
              <li className={style.list_star_count}>
                {item.stargazers_count} watchers
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
