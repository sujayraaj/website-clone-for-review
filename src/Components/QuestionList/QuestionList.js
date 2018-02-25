import React from "react";
import { connect } from "react-redux";
import QuestionSelection from "./Components/QuestionSelection";
import QuestionTable from "./Components/QuestionTable";
import { selectAllQuestions } from "./actions";
import { setStateKey as setStateKeyAction } from "../AddQuestion/actions";

export const QuestionList = ({
  questionList,
  selectAll,
  allSelected,
  setStateKey
}) => {
  const handleInputChange = (key, index = null, checkBox = false) => {
    return e => {
      setStateKey(key, checkBox ? e.target.checked : e.target.value, index);
    };
  };

  return (
    <div>
      <h1>Question List</h1>
      <QuestionSelection
        selectAllCallback={selectAll}
        allSelected={allSelected}
      />
      <QuestionTable
        callback={handleInputChange}
        questionList={questionList}
        allSelected={allSelected}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  questionList: state.questionListData,
  allSelected: state.questionListPage.allSelected
});

const mapDispatchToProps = dispatch => ({
  selectAll: () => {
    dispatch(selectAllQuestions());
  },
  setStateKey: (key, value, index) => {
    dispatch(setStateKeyAction(key, value, index));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
