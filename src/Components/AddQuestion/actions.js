import {
  CHANGE_QUESTION_TYPE,
  SET_STATE_KEY,
  LOAD_QUESTION,
  CANCEL_ADD_EDIT_QUESTION,
  SUBMIT_ADD_EDIT_QUESTION,
  ADD_QUESTION
} from "./constants";

export const changeQuestionType = id => ({
  type: CHANGE_QUESTION_TYPE,
  payLoad: {
    questionId: id
  }
});

export const setStateKey = (key, value, index) => ({
  type: SET_STATE_KEY,
  payLoad: {
    key,
    value,
    index
  }
});

export const loadQuestion = data => ({
  type: LOAD_QUESTION,
  payLoad: {
    data
  }
});

export const cancel = () => ({
  type: CANCEL_ADD_EDIT_QUESTION
});

export const submitQuestion = (payLoad, edit) => ({
  type: SUBMIT_ADD_EDIT_QUESTION,
  payLoad,
  edit
});

export const addQuestion = payLoad => ({
  type: ADD_QUESTION,
  payLoad
});
