import React from "react";
import Input from "../../../common/Input";
import { Link } from "react-router-dom";
import styles from "./QuestionSelection.css";
export default ({ allSelected, selectAllCallback, labelFunction }) => (
  <div className={`container ${styles.tile}`}>
    <div className={`row ${styles.row}`}>
      <div
        className="col-sm-1"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Input
          wrapperProps={{ className: "row" }}
          labelClass={`${styles.label}`}
          className={`${styles.input}`}
          type="checkbox"
          name="selectAll"
          labelId={`selectAll${"selectAll"}`}
          label={"selectAll"}
          labelled
          aria-labelledby={`selectAll${"selectAll"}`}
          checked={allSelected}
          changeCallback={selectAllCallback}
          flipped
        />
      </div>
      <div className={`col-sm-11 ${styles.rightSection}`}>
        <div className="container">
          <div className="row justify-content-around">
            <div className={`col-sm-8 ${styles.flexAuxClass}`}>
              {labelFunction("selectQuestion")}
            </div>
            <button className={`col-sm-1 btn btn-primary ${styles.Assign}`}>
              {labelFunction("assign")}
            </button>
            <Link
              className={`col-sm-2 btn btn-light ${styles.Author}`}
              to="/add-edit-question"
            >
              {labelFunction("author")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
