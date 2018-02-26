import React from "react";
import { connect } from "react-redux";
import pathOr from "lodash/fp/pathOr";
import PropTypes from "prop-types";
import { getLabels } from "../../utils";
import { WrappedInput } from "../common/Input";
import { RadioGroup as QuestionTypeBuilder } from "./Components/RadioGroup";
import Answers from "./Components/Answers";
import SubmissionPanel from "./Components/SubmissionPanel";
import styles from "./styles.css";
import {
  changeQuestionType as changeQuestionTypeAction,
  setStateKey as setStateKeyAction,
  loadQuestion as loadQuestionAction,
  cancel as cancelAction,
  submitQuestion as submitQuestionAction
} from "./actions";
import { MULTIPLE_CHOICE, PASSAGE_TYPE } from "./constants";

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.typeChange = this.typeChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }
  matchAndFindData(questionData = []) {
    const { match } = this.props;
    if (match.params.questionId) {
      const data = questionData.find(val => {
        return val.id == match.params.questionId;
      });
      if (data) this.props.loadQuestion(data);
    }
  }
  componentDidMount() {
    this.matchAndFindData(this.props.questionData);
  }
  componentWillReceiveProps(nextProps) {
    if (
      (this.props.questionData.length == 0 &&
        nextProps.questionData.length != 0) ||
      this.props.location.pathName !== nextProps.location.pathName
    ) {
      this.matchAndFindData(nextProps.questionData);
    }
  }
  typeChange(index) {
    return e => {
      if (e.target.checked) this.props.changeQuestionType(index);
    };
  }
  handleInputChange(key, index = null, checkBox = false) {
    return e => {
      this.props.setStateKey(
        key,
        checkBox ? e.target.checked : e.target.value,
        index
      );
    };
  }
  submit(evt) {
    evt.preventDefault();
    this.props.submit(this.props);
    this.props.cancel();
    this.props.history.push("/question-list");
    return null;
  }
  cancel(evt) {
    evt.preventDefault();
    this.props.cancel();
    this.props.history.push("/question-list");
    return null;
  }
  render() {
    const Labels = getLabels(this.props.labels || {});
    const commonInputWrapperProps = {
      className: styles.section
    };
    return (
      <form>
        <div
          className={`container ${styles.pageContainer}`}
          role="group"
          aria-labelledby="pageHeading"
        >
          <h1 id="pageHeading" className={styles.pageHeading}>
            {Labels("pageTitle")}
          </h1>
          <QuestionTypeBuilder
            lables={Labels("typeOptions")}
            lableFunction={Labels}
            callback={this.typeChange}
            defaultSelected={this.props.questionType}
            className={styles.questionTypeBuilder}
            rightAnswer={this.props.rightAnswer}
          >
            <label id="questionTypeLabel" className={styles.questionTypeLabel}>
              {Labels("type")}
            </label>
          </QuestionTypeBuilder>
          <WrappedInput
            labelId="questionTitle"
            label={Labels("title")}
            labelled
            aria-labelledby="questionTitle"
            placeholder={Labels("titlePH")}
            wrapperProps={commonInputWrapperProps}
            value={this.props.questionTitle}
            changeCallback={this.handleInputChange("questionTitle")}
          />
          <WrappedInput
            labelId="questionDescription"
            label={Labels("description")}
            labelled
            aria-labelledby="questionDescription"
            placeholder={Labels("descriptionPH")}
            wrapperProps={commonInputWrapperProps}
            value={this.props.questionDescription}
            changeCallback={this.handleInputChange("questionDescription")}
          />
          {this.props.questionType === MULTIPLE_CHOICE ? (
            <Answers
              labelFunction={Labels}
              values={this.props.answerOptions}
              rightAnswer={this.props.rightAnswer}
              changeCallback={this.handleInputChange}
            />
          ) : null}
          {this.props.questionType === PASSAGE_TYPE ? (
            <WrappedInput
              labelId="idealAnswer"
              label={Labels("idealAnswer")}
              labelled
              aria-labelledby="idealAnswer"
              placeholder={Labels("idealAnswerPH")}
              wrapperProps={commonInputWrapperProps}
              value={this.props.idealAnswer}
              changeCallback={this.handleInputChange("idealAnswer")}
            />
          ) : null}
          <WrappedInput
            labelId="instructions"
            label={Labels("instructions")}
            labelled
            aria-labelledby="instructions"
            placeholder={Labels("instructionsPH")}
            wrapperProps={commonInputWrapperProps}
            value={this.props.instructions}
            changeCallback={this.handleInputChange("instructions")}
          />
          <SubmissionPanel
            lableFunction={Labels}
            submitCallback={this.submit}
            cancelCallback={this.cancel}
            updateOnSubmit={!!this.props.match.params.questionId}
          />
        </div>
      </form>
    );
  }
}

AddQuestion.propTypes = {
  labels: PropTypes.object,
  questionType: PropTypes.any,
  id: PropTypes.any,
  questionTitle: PropTypes.string,
  questionDescription: PropTypes.string,
  answerOptions: PropTypes.array,
  rightAnswer: PropTypes.array,
  idealAnswer: PropTypes.string,
  instructions: PropTypes.string,
  questionData: PropTypes.array,
  isDataAvailable: PropTypes.bool
};

AddQuestion.defaultProps = {
  questionType: "",
  id: "",
  questionTitle: "",
  questionDescription: "",
  answerOptions: [],
  rightAnswer: [],
  idealAnswer: "",
  instructions: "",
  questionData: [],
  isDataAvailable: false
};

const mapStateToProps = state => {
  return {
    labels: pathOr({}, "AddQuestion", state.labels),
    questionType: state.addQuestionsPage.questionType,
    id: state.addQuestionsPage.id,
    questionTitle: state.addQuestionsPage.questionTitle || "",
    questionDescription: state.addQuestionsPage.questionDescription || "",
    answerOptions: state.addQuestionsPage.answerOptions || [],
    rightAnswer: state.addQuestionsPage.rightAnswer || [],
    idealAnswer: state.addQuestionsPage.idealAnswer || "",
    instructions: state.addQuestionsPage.instructions || "",
    questionData: state.questionListData || [],
    isDataAvailable: state.questionListData.length !== 0
  };
};

const mapDispatchToProps = dispatch => ({
  changeQuestionType: i => {
    dispatch(changeQuestionTypeAction(i));
  },
  setStateKey: (key, value, index) => {
    dispatch(setStateKeyAction(key, value, index));
  },
  loadQuestion: data => {
    dispatch(loadQuestionAction(data));
  },
  cancel: () => {
    dispatch(cancelAction());
  },
  submit: props => {
    const {
      questionType,
      questionTitle,
      questionDescription,
      answerOptions,
      rightAnswer,
      idealAnswer,
      instructions,
      id,
      match
    } = props;
    dispatch(
      submitQuestionAction(
        {
          questionType,
          questionTitle,
          questionDescription,
          answerOptions,
          rightAnswer,
          idealAnswer,
          instructions,
          id
        },
        !!match.params.questionId
      )
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
