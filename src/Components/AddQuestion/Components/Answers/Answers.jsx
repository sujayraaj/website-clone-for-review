import React from "react";
import PropTypes from "prop-types";
import Input from "../../../common/Input";
import styles from "./Answers.css";

export const Answers = ({
  labelFunction,
  values,
  rightAnswer,
  changeCallback
}) => (
  <div className={`container ${styles.answerContainer || ""}`}>
    <div className="row">
      <div className="col-sm-10">
        <label id="answers">{labelFunction("answer")}</label>
      </div>
      <div className="col-sm-2" style={{ textAlign: "center" }}>
        <label id="answers">{labelFunction("rightAnswer")}</label>
      </div>
    </div>
    {labelFunction("answerPH").map((val, ind) => (
      <div className="row" key={`questionTypeItem${ind}`}>
        <div className="col-sm-10">
          <Input
            placeholder={val}
            type="text"
            aria-label="Checkbox for following text input"
            style={{ marginBottom: "10px" }}
            value={values[ind]}
            onChange={changeCallback(`answerOptions`, ind)}
          />
        </div>
        <div
          className={`col-sm-2 align-self-center justify-content-center ${
            styles.checkBoxWrapper
          }`}
        >
          <Input
            type="checkbox"
            name={`answer`}
            aria-label="Text input with checkbox"
            checked={rightAnswer[ind]}
            onChange={changeCallback(`rightAnswer`, ind, true)}
          />
        </div>
      </div>
    ))}
  </div>
);

Answers.propTypes = {
  labelFunction: PropTypes.func,
  values: PropTypes.array,
  rightAnswer: PropTypes.array,
  changeCallback: PropTypes.func
};

Answers.defaultProps = {
  values: [],
  rightAnswer: []
};

export default Answers;
