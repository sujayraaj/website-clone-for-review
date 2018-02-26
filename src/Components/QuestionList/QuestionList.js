import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QuestionSelection from "./Components/QuestionSelection";
import QuestionTable from "./Components/QuestionTable";
import { selectAllQuestions } from "./actions";
import { setStateKeyTable as setStateKeyTableAction } from "./actions";
import { getLabels } from "../../utils";
import styles from "./QuestionList.css";

export class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(key, index = null, checkBox = true) {
    return e => {
      this.props.setStateKey(
        key,
        checkBox ? e.target.checked : e.target.value,
        index
      );
    };
  }
  render() {
    const { questionList, selectAll, allSelected, labels } = this.props;
    const Labels = getLabels(labels || {});

    return (
      <div>
        <h1 className={styles.pageHeading}>{Labels("questionList")}</h1>
        <QuestionSelection
          selectAllCallback={selectAll}
          allSelected={allSelected}
          labelFunction={Labels}
        />
        <QuestionTable
          callback={this.handleInputChange}
          questionList={questionList}
          allSelected={allSelected}
          labelFunction={Labels}
        />
      </div>
    );
  }
}

QuestionList.propTypes = {
  questionList: PropTypes.array,
  allSelected: PropTypes.bool,
  selectedQuestions: PropTypes.array,
  labels: PropTypes.object
};

QuestionList.defaultProps = {
  questionList: [],
  allSelected: false,
  selectedQuestions: [],
  labels: {}
};

const mapStateToProps = state => ({
  questionList: state.questionListData,
  allSelected: state.questionListPage.allSelected,
  selectedQuestions: state.questionListPage.selectedQuestions || [],
  labels: state.labels.QuestionList || {}
});

const mapDispatchToProps = dispatch => ({
  selectAll: () => {
    dispatch(selectAllQuestions());
  },
  setStateKey: (key, value, index) => {
    dispatch(setStateKeyTableAction(key, value, index));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
