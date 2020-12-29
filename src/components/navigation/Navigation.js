import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => (
  <>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <NavLink
          exact
          className={styles.listLink}
          activeClassName={styles.active}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink
          className={styles.listLink}
          activeClassName={styles.active}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </>
);
export default Navigation;
