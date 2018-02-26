import { takeLatest, call, put } from "redux-saga/effects";
import { SUBMIT_ADD_EDIT_QUESTION } from "./constants";
import { triggerServerRequest } from "../../utils";
import { addQuestion } from "./actions";
import { QUESTIONS_LOCALSTORAGE_KEY } from "../../constants";

function* submitQuestion(action) {
  const data = JSON.parse(
    window.localStorage.getItem(QUESTIONS_LOCALSTORAGE_KEY)
  );
  if (action.edit) {
    const index = data.findIndex(el => {
      return el.id === action.payLoad.id;
    });
    data[index] = action.payLoad;
  } else {
    data.push({ ...action.payLoad, id: data.length + 100 });
  }
  window.localStorage.setItem(
    QUESTIONS_LOCALSTORAGE_KEY,
    JSON.stringify([...data])
  );

  /*const data = yield call(
    triggerServerRequest,
    {
      url: "http://localhost:3001/questions",
      method: action.edit ? "PUT" : "POST",
      data: action.payLoad
    },
    res => res,
    () => null,
    true
  );*/

  yield put(addQuestion(data));
}

function* mySaga() {
  yield takeLatest(SUBMIT_ADD_EDIT_QUESTION, submitQuestion);
}

export default mySaga;
