import { all } from "redux-saga/effects";

import AddQuestionSaga from "./Components/AddQuestion/sagas";
import mySaga from "./sagas";

export default function* rootSaga() {
  yield all([AddQuestionSaga(), mySaga()]);
}
