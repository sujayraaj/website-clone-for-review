import React from "react";
import Input from "../../../common/Input";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./QuestionTable.css";
import {
  MULTIPLE_CHOICE,
  SUBMISSION_TYPE
} from "../../../AddQuestion/constants";

export const QuestionTable = ({
  selectedQuestions = [],
  questionList = [],
  callback,
  allSelected,
  labelFunction
}) => (
  <div className="container">
    {questionList.map((val, ind) => (
      <div key={"questionTableItem" + ind} className={`row`}>
        <div className="col-sm-1">
          <Input
            type="checkbox"
            name={`selectedQuestion${ind}`}
            checked={allSelected || selectedQuestions[ind]}
            changeCallback={callback("selectedQuestions", ind)}
          />
        </div>
        <Link className={`col-sm-11`} to={`/add-edit-question/${val.id}/`}>
          <div className={`row  ${styles.tile}`}>
            <div className={`col-sm-1 ${styles.serialNumber}`}>
              <div>{labelFunction("serialNo")}</div>
              <div>{ind + 1}</div>
            </div>
            <div className={`col-sm-9 ${styles.questionContent}`}>
              <div>{val.questionTitle}</div>
              <div>{val.questionDescription}</div>
            </div>
            <div className={`col-sm-2 ${styles.questionType}`}>
              <div>{labelFunction("questionType")}</div>
              <div>
                {val.questionType == MULTIPLE_CHOICE
                  ? labelFunction("mcq")
                  : val.questionType == SUBMISSION_TYPE
                    ? labelFunction("submission")
                    : labelFunction("passage")}
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

QuestionTable.propTypes = {
  selectedQuestions: PropTypes.array,
  questionList: PropTypes.array,
  callback: PropTypes.func,
  allSelected: PropTypes.bool,
  labelFunction: PropTypes.func
};

QuestionTable.defaultProps = {
  selectedQuestions: [],
  questionList: [],
  allSelected: false
};

export default QuestionTable;
