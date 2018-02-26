import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import styles from "./App.css";
import AddQuestion from "./Components/AddQuestion";
import QuestionList from "./Components/QuestionList";
import {
  fetchQuestionData as fetchQuestionDataAction,
  fetchLabels as fetchLabelAction
} from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchQuestionData();
    this.props.fetchLabels();
  }
  render() {
    return (
      <div className={styles.App}>
        <div className={`container ${styles.container || ""}`}>
          <Header />
          <Switch>
            <Route exact path="/add-edit-question" component={AddQuestion} />
            <Route
              path="/add-edit-question/:questionId"
              component={AddQuestion}
            />
            <Route exact path="/question-list" component={QuestionList} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateProp: state
});

const mapDispatchToProps = dispatch => ({
  fetchQuestionData: () => {
    dispatch(fetchQuestionDataAction());
  },
  fetchLabels: () => {
    dispatch(fetchLabelAction());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
