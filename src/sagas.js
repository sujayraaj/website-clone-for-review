import { put, takeLatest } from 'redux-saga/effects'

function* fetchUser(action) {
   try {
      yield put({type: "ACTION1", payload: 'ACTION IS 1'});
   } catch (e) {
      yield put({type: "ACTION2"});
   }
}

function* mySaga() {
  yield takeLatest("ACTION3", fetchUser);
}

export default mySaga