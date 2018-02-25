import React from "react";
import { connect } from "react-redux";
import pathOr from "lodash/fp/pathOr";
import { getLabels } from "../../utils";
import { WrappedInput, Input } from "../common/Input";
import { RadioGroup as QuestionTypeBuilder } from "./Components/RadioGroup";
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
    return (
      <form>
        {" "}
        <div className={`container`} role="group" aria-labelledby="pageHeading">
          <h1 id="pageHeading">{Labels("pageTitle")}</h1>
          <QuestionTypeBuilder
            lables={Labels("typeOptions")}
            lableFunction={Labels}
            callback={this.typeChange}
            defaultSelected={this.state.questionType}
          >
            <label id="questionTypeLabel">{Labels("type")}</label>
          </QuestionTypeBuilder>
          <WrappedInput
            labelId="questionTitle"
            label={Labels("title")}
            labelled
            aria-labelledby="questionTitle"
            placeholder={Labels("titlePH")}
          />
          <WrappedInput
            labelId="questionDescription"
            label={Labels("description")}
            labelled
            aria-labelledby="questionDescription"
            placeholder={Labels("descriptionPH")}
          />
          {this.state.questionType === MULTIPLE_CHOICE ? (
            <div>
              <label id="answers">{Labels("answer")}</label>
              {Labels("answerPH").map((val, ind) => (
                <div key={`questionTypeItem${ind}`}>
                  <Input placeholder={val} />
                  <Input type="radio" name={`answer`} />
                </div>
              ))}
            </div>
          ) : null}
          {this.state.questionType === PASSAGE_TYPE ? (
            <WrappedInput
              labelId="idealAnswer"
              label={Labels("idealAnswer")}
              labelled
              aria-labelledby="idealAnswer"
              placeholder={Labels("idealAnswerPH")}
            />
          ) : null}
          <WrappedInput
            labelId="instructions"
            label={Labels("instructions")}
            labelled
            aria-labelledby="instructions"
            placeholder={Labels("instructionsPH")}
          />
          <div>
            <div>{Labels("submitInstructions")}</div>
            <div>
              <button type="submit">{Labels("submit")}</button>
              <button type="cancel">{Labels("cancel")}</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  labels: pathOr({}, "AddQuestion", state.labels)
});
export default connect(mapStateToProps)(AddQuestion);
