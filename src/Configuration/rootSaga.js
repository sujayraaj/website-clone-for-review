import { all } from "redux-saga/effects";

import AddQuestionSaga from "../Components/AddQuestion/sagas";
import { fetchLabelsSaga, fetchQuestionDataSaga } from "../sagas";

export default function* rootSaga() {
  yield all([AddQuestionSaga(), fetchLabelsSaga(), fetchQuestionDataSaga()]);
}
