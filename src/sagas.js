import { call, takeLatest, put } from "redux-saga/effects";
import { FETCH_QUESTION_DATA } from "./constants";
import { triggerServerRequest } from "./utils";
import { fetchQuestionDataSuccess } from "./actions";

function* fetchQuestionData(action) {
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

  const data = JSON.parse(window.localStorage.getItem("QUESTIONS"));
  console.log("fetchQuestionData");
  yield put(fetchQuestionDataSuccess(data));
}

function* fetchQuestionDataSaga() {
  yield takeLatest(FETCH_QUESTION_DATA, fetchQuestionData);
}

export default fetchQuestionDataSaga;
