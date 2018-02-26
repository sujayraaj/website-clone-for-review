import { call, takeLatest, put } from "redux-saga/effects";
import {
  FETCH_QUESTION_DATA,
  FETCH_LABELS_DATA,
  LABELS_LOCALSTORAGE_KEY,
  QUESTIONS_LOCALSTORAGE_KEY
} from "./constants";
import { triggerServerRequest } from "./utils";
import { fetchQuestionDataSuccess, fetchLabelsSuccess } from "./actions";

function* fetchQuestionData() {
  /* const data = yield call(
    triggerServerRequest,
    {
      url: "http://localhost:3001/questions"
    },
    res => res,
    () => null,
    true
  );
  console.log(data.response); */

  const data = JSON.parse(
    window.localStorage.getItem(QUESTIONS_LOCALSTORAGE_KEY)
  );
  yield put(fetchQuestionDataSuccess(data));
}

export function* fetchQuestionDataSaga() {
  yield takeLatest(FETCH_QUESTION_DATA, fetchQuestionData);
}

function* fetchLabelsData() {
  const data = JSON.parse(window.localStorage.getItem(LABELS_LOCALSTORAGE_KEY));
  yield put(fetchLabelsSuccess(data));
}

export function* fetchLabelsSaga() {
  yield takeLatest(FETCH_LABELS_DATA, fetchLabelsData);
}
