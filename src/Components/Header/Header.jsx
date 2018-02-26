import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

export default () => (
  <header className={`container-fluid ${styles.Header}`}>
    <div class="row">
      <div class="col">
        <Link to={"/"} className={`${styles.icon || ""}`}>
          {"Up"}
          <span className={`${styles.G || ""}`}>{"G"}</span>
          {"rad"}
        </Link>
      </div>
      <div class="col">
        <Link className={`${styles.headerLink}`} to="/add-edit-question">
          Add / Edit Question
        </Link>
      </div>
      <div class="col">
        <Link className={`${styles.headerLink}`} to="/question-list">
          Question List
        </Link>
      </div>
    </div>
  </header>
);
