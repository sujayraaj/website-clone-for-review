import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer, {
  QuestionListReducer,
  AddEditQuestionReducer,
  questionListDataReducer
} from "./reducers";

import rootSaga from "./rootSaga";

import createHistory from "history/createBrowserHistory";

import { routerReducer, routerMiddleware } from "react-router-redux";

export const history = createHistory();

const rMiddleWare = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, rMiddleWare];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const labels = {
  AddQuestion: {
    pageTitle: "Question Builder",
    type: "What type of Question do you want to create?",
    typeOptions: [
      "Multiple Choice Question",
      "Submission type question",
      "Passage (text) type question"
    ],
    title: "Question title",
    titlePH: "type your question title here",
    description: "Question description",
    descriptionPH: "type your question description here",
    answer: "Answer Options",
    answerPH: [
      "Type Option A here",
      "Type Option B here",
      "Type Option C here",
      "Type Option B here"
    ],
    idealAnswer: "Ideal Answer",
    rightAnswer: "Right Answer",
    idealAnswerPH: "Type Your Answer Here",
    instructions: "Instructions",
    instructionsPH:
      "Type instructions here ... (eg file size, file format etc )",
    submitInstructions:
      "Click author to create a new question and it will be added automatically to the Question list",
    submit: "Author",
    cancel: "Cancel"
  }
};
const questionListData = Array.apply(null, { length: 10 }).map((val, ind) => ({
  questionType: ind % 3,
  questionTitle: `Question Title: ${ind}`,
  questionDescription: `Question description: ${ind}`,
  answerOptions:
    ind % 3 === 0
      ? [
          `AnswerOption: 1 for Question ${ind}`,
          `AnswerOption: 2 for Question ${ind}`,
          `AnswerOption: 3 for Question ${ind}`,
          `AnswerOption: 4 for Question ${ind}`
        ]
      : null,
  idealAnswer: ind % 3 === 2 ? `Ideal answer for Question: ${ind}` : null,
  instructions: `Question instructions: ${ind}`,
  assignedTo: []
}));
const initialState = {
  reducer: "",
  router: {},
  labels: labels,
  questionListData: []
};

export const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer,
    labels: (state = {}) => state,
    questionListData: questionListDataReducer,
    questionListPage: QuestionListReducer,
    addQuestionsPage: AddEditQuestionReducer
  }),
  initialState,
  composeEnhancers(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSaga);
