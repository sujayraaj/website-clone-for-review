import {
  FETCH_QUESTION_DATA,
  FETCH_QUESTION_DATA_SUCCESS,
  FETCH_LABELS_DATA,
  FETCH_LABELS_DATA_SUCCESS
} from "./constants";

export const fetchQuestionData = () => ({
  type: FETCH_QUESTION_DATA
});
export const fetchQuestionDataSuccess = payLoad => ({
  type: FETCH_QUESTION_DATA_SUCCESS,
  payLoad
});

export const fetchLabels = () => ({
  type: FETCH_LABELS_DATA
});

export const fetchLabelsSuccess = payLoad => ({
  type: FETCH_LABELS_DATA_SUCCESS,
  payLoad
});
