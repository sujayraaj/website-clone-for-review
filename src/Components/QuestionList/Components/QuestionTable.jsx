import React from "react";
import Input from "../../common/Input";
import { Link } from "react-router-dom";

export const QuestionTable = ({
  selectedQuestions = [],
  questionList = [],
  callback,
  allSelected
}) => (
  <div>
    {questionList.map((val, ind) => (
      <div
        key={"questionTableItem" + ind}
        style={{
          border: "1px solid black",
          background: ind % 2 == 0 ? "lightblue" : "pink"
        }}
      >
        <div>
          <Input
            type="checkBox"
            name={`selectedQuestion${ind}`}
            checked={allSelected || selectedQuestions.indexOf(ind) !== -1}
            changeCallback={callback}
          />
        </div>
        <Link to={`/add-edit-question/${val.id}/`}>
          <div>
            <div>S.No {ind + 1}</div>
            <div>{JSON.stringify(val)}</div>
            <div>
              <div>QUESTION TYPE</div>
              <div>{val.questionType}</div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default QuestionTable;
