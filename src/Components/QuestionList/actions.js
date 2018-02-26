import { SELECT_ALL_QUESTIONS, SET_STATE_KEY_TABLE } from "./constants";

export const selectAllQuestions = () => ({
  type: SELECT_ALL_QUESTIONS
});

export const setStateKeyTable = (key, value, index) => ({
  type: SET_STATE_KEY_TABLE,
  payLoad: {
    key,
    value,
    index
  }
});
