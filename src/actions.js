import { FETCH_QUESTION_DATA, FETCH_QUESTION_DATA_SUCCESS } from "./constants";

export const fetchQuestionData = () => ({
  type: FETCH_QUESTION_DATA
});
export const fetchQuestionDataSuccess = payLoad => ({
  type: FETCH_QUESTION_DATA_SUCCESS,
  payLoad
});
