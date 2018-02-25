import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

export default () => (
  <header className={`container-fluid ${styles.Header}`}>
    <Link to={"/"} className={`${styles.icon || ""}`}>
      {"Up"}
      <span className={`${styles.G || ""}`}>{"G"}</span>
      {"rad"}
    </Link>
  </header>
);
