import React from "react";
import { connect } from "react-redux";
import pathOr from "lodash/fp/pathOr";
import { getLabels } from "../../utils";
import { WrappedInput } from "../common/Input";
import { RadioGroup as QuestionTypeBuilder } from "./Components/RadioGroup";
import Answers from "./Components/Answers";
import SubmissionPanel from "./Components/SubmissionPanel";
import styles from "./styles.css";

import { MULTIPLE_CHOICE, PASSAGE_TYPE } from "./constants";

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: MULTIPLE_CHOICE
    };
    this.typeChange = this.typeChange.bind(this);
  }
  typeChange(index) {
    return e => {
      if (e.target.checked) this.setState({ questionType: index });
    };
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
            defaultSelected={this.state.questionType}
            className={styles.questionTypeBuilder}
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
          />
          <WrappedInput
            labelId="questionDescription"
            label={Labels("description")}
            labelled
            aria-labelledby="questionDescription"
            placeholder={Labels("descriptionPH")}
            wrapperProps={commonInputWrapperProps}
          />
          {this.state.questionType === MULTIPLE_CHOICE ? (
            <Answers labelFunction={Labels} />
          ) : null}
          {this.state.questionType === PASSAGE_TYPE ? (
            <WrappedInput
              labelId="idealAnswer"
              label={Labels("idealAnswer")}
              labelled
              aria-labelledby="idealAnswer"
              placeholder={Labels("idealAnswerPH")}
              wrapperProps={commonInputWrapperProps}
            />
          ) : null}
          <WrappedInput
            labelId="instructions"
            label={Labels("instructions")}
            labelled
            aria-labelledby="instructions"
            placeholder={Labels("instructionsPH")}
            wrapperProps={commonInputWrapperProps}
          />
          <SubmissionPanel lableFunction={Labels} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  labels: pathOr({}, "AddQuestion", state.labels)
});
export default connect(mapStateToProps)(AddQuestion);
