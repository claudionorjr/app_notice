import { call, put, takeEvery } from 'redux-saga/effects'
import Api from './data/Api'

function* fetchNotice(action) {
   try {
      const notice = yield call(Api);
      yield put({type: "initial", notices: notice});
   } catch (e) {
      console.log(e)
   }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchNotice);
}

export default mySaga;
