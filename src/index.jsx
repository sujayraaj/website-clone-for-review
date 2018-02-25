import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store, history } from "./store";
import { ConnectedRouter } from "react-router-redux";

import registerServiceWorker from "./registerServiceWorker";
if (!window.localStorage.getItem("QUESTIONS"))
  window.localStorage.setItem(
    "QUESTIONS",
    JSON.stringify([
      {
        id: 1,
        questionType: 0,
        questionTitle: "Question Title: 0",
        questionDescription: "Question description: 0",
        answerOptions: [
          "AnswerOption: 1 for Question 0",
          "AnswerOption: 2 for Question 0",
          "AnswerOption: 3 for Question 0",
          "AnswerOption: 4 for Question 0"
        ],
        idealAnswer: null,
        instructions: "Question instructions: 0",
        assignedTo: []
      },
      {
        id: 2,
        questionType: 1,
        questionTitle: "Question Title: 1",
        questionDescription: "Question description: 1",
        answerOptions: null,
        idealAnswer: null,
        instructions: "Question instructions: 1",
        assignedTo: []
      },
      {
        id: 3,
        questionType: 2,
        questionTitle: "Question Title: 2",
        questionDescription: "Question description: 2",
        answerOptions: null,
        idealAnswer: "Ideal answer for Question: 2",
        instructions: "Question instructions: 2",
        assignedTo: []
      },
      {
        id: 4,
        questionType: 0,
        questionTitle: "Question Title: 3",
        questionDescription: "Question description: 3",
        answerOptions: [
          "AnswerOption: 1 for Question 3",
          "AnswerOption: 2 for Question 3",
          "AnswerOption: 3 for Question 3",
          "AnswerOption: 4 for Question 3"
        ],
        idealAnswer: null,
        instructions: "Question instructions: 3",
        assignedTo: []
      },
      {
        id: 5,
        questionType: 1,
        questionTitle: "Question Title: 4",
        questionDescription: "Question description: 4",
        answerOptions: null,
        idealAnswer: null,
        instructions: "Question instructions: 4",
        assignedTo: []
      },
      {
        id: 6,
        questionType: 2,
        questionTitle: "Question Title: 5",
        questionDescription: "Question description: 5",
        answerOptions: null,
        idealAnswer: "Ideal answer for Question: 5",
        instructions: "Question instructions: 5",
        assignedTo: []
      },
      {
        id: 7,
        questionType: 0,
        questionTitle: "Question Title: 6",
        questionDescription: "Question description: 6",
        answerOptions: [
          "AnswerOption: 1 for Question 6",
          "AnswerOption: 2 for Question 6",
          "AnswerOption: 3 for Question 6",
          "AnswerOption: 4 for Question 6"
        ],
        idealAnswer: null,
        instructions: "Question instructions: 6",
        assignedTo: []
      },
      {
        id: 8,
        questionType: 1,
        questionTitle: "Question Title: 7",
        questionDescription: "Question description: 7",
        answerOptions: null,
        idealAnswer: null,
        instructions: "Question instructions: 7",
        assignedTo: []
      },
      {
        id: 9,
        questionType: 2,
        questionTitle: "Question Title: 8",
        questionDescription: "Question description: 8",
        answerOptions: null,
        idealAnswer: "Ideal answer for Question: 8",
        instructions: "Question instructions: 8",
        assignedTo: []
      },
      {
        id: 10,
        questionType: 0,
        questionTitle: "Question Title: 9",
        questionDescription: "Question description: 9",
        answerOptions: [
          "AnswerOption: 1 for Question 9",
          "AnswerOption: 2 for Question 9",
          "AnswerOption: 3 for Question 9",
          "AnswerOption: 4 for Question 9"
        ],
        idealAnswer: null,
        instructions: "Question instructions: 9",
        assignedTo: []
      }
    ])
  );

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App store={store} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
