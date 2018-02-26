import React from "react";
import styles from "./SubmissionPanel.css";

export default ({
  lableFunction,
  submitCallback,
  cancelCallback,
  updateOnSubmit
}) => (
  <div className={`container ${styles.submissionPanel}`}>
    <div
      className="row justify-content-space-evenly"
      style={{
        justifyContent: "space-evenly"
      }}
    >
      <div className="col-7">{lableFunction("submitInstructions")}</div>
      <div className="col-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "95px", height: "46px" }}
                onClick={cancelCallback}
              >
                {lableFunction("cancel")}
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "95px", height: "46px" }}
                onClick={submitCallback}
              >
                {updateOnSubmit
                  ? lableFunction("Update")
                  : lableFunction("submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
