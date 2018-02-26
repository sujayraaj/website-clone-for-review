import React from "react";
import { connect } from "react-redux";
import QuestionSelection from "./Components/QuestionSelection";
import QuestionTable from "./Components/QuestionTable";
import { selectAllQuestions } from "./actions";
import { setStateKeyTable as setStateKeyTableAction } from "./actions";

export class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(key, index = null, checkBox = true) {
    console.log("CALLED");
    return e => {
      console.log("THIS IS ALSO CALLED");
      this.props.setStateKey(
        key,
        checkBox ? e.target.checked : e.target.value,
        index
      );
    };
  }
  render() {
    const { questionList, selectAll, allSelected } = this.props;
    return (
      <div>
        <h1>Question List</h1>
        <QuestionSelection
          selectAllCallback={selectAll}
          allSelected={allSelected}
        />
        {console.log(this.handleInputChange)}
        <QuestionTable
          callback={this.handleInputChange}
          questionList={questionList}
          allSelected={allSelected}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionList: state.questionListData,
  allSelected: state.questionListPage.allSelected,
  selectedQuestions: state.questionListPage.selectedQuestions || []
});

const mapDispatchToProps = dispatch => ({
  selectAll: () => {
    dispatch(selectAllQuestions());
  },
  setStateKey: (key, value, index) => {
    console.log("INSIDE ACTION");
    dispatch(setStateKeyTableAction(key, value, index));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
