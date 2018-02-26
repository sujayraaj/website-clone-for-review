import {
  SELECT_ALL_QUESTIONS,
  SET_STATE_KEY_TABLE
} from "./Components/QuestionList/constants";
import {
  MULTIPLE_CHOICE,
  CHANGE_QUESTION_TYPE,
  SET_STATE_KEY,
  LOAD_QUESTION,
  CANCEL_ADD_EDIT_QUESTION,
  ADD_QUESTION
} from "./Components/AddQuestion/constants";

import {
  FETCH_QUESTION_DATA_SUCCESS,
  FETCH_LABELS_DATA_SUCCESS
} from "./constants";

export default (state = "", { type, payload }) => {
  switch (type) {
    case "ACTION1":
      return payload;
    case "ACTION2":
      return "ACTION2";
    default:
      return state;
  }
};

const questionListInitialState = {
  allSelected: false
};

export const QuestionListReducer = (
  state = questionListInitialState,
  { type, payLoad }
) => {
  switch (type) {
    case SELECT_ALL_QUESTIONS:
      const isAllSelected = state.allSelected;
      return {
        ...state,
        allSelected: !isAllSelected
      };
    case SET_STATE_KEY_TABLE:
      if (payLoad.index !== null) {
        const arr = [...(state[payLoad.key] || [])];
        arr[payLoad.index] = payLoad.value;
        return {
          ...state,
          [payLoad.key]: [...arr]
        };
      }
      return {
        ...state,
        [payLoad.key]: payLoad.value
      };
    default:
      return state;
  }
};

const AddEditQuestionInitialState = {
  questionType: MULTIPLE_CHOICE,
  answerOptions: [],
  rightAnswer: []
};

export const configurationReducer = (state = {}, { type, payLoad }) => {
  switch (type) {
    case LOAD_QUESTION:
      return {
        ...state,
        questionLoaded: true
      };
    default:
      return state;
  }
};

export const AddEditQuestionReducer = (
  state = AddEditQuestionInitialState,
  { type, payLoad }
) => {
  switch (type) {
    case CHANGE_QUESTION_TYPE:
      return {
        ...state,
        questionType: payLoad.questionId
      };
    case SET_STATE_KEY:
      if (payLoad.index !== null) {
        const arr = [...(state[payLoad.key] || [])];
        arr[payLoad.index] = payLoad.value;
        return {
          ...state,
          [payLoad.key]: [...arr]
        };
      }
      return {
        ...state,
        [payLoad.key]: payLoad.value
      };
    case LOAD_QUESTION:
      const data = payLoad.data || {};
      return {
        ...state,
        ...data
      };
    case CANCEL_ADD_EDIT_QUESTION:
      return AddEditQuestionInitialState;
    default:
      return state;
  }
};

export const questionListDataReducer = (state = [], { type, payLoad }) => {
  switch (type) {
    case FETCH_QUESTION_DATA_SUCCESS:
      return [...state, ...payLoad];
    case ADD_QUESTION:
      return payLoad;
    default:
      return state;
  }
};

export const labelReducer = (state = {}, { type, payLoad }) => {
  switch (type) {
    case FETCH_LABELS_DATA_SUCCESS:
      return payLoad;
    default:
      return state;
  }
};
