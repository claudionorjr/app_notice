import { call, put, takeEvery } from 'redux-saga/effects'
import Api from './data/Api'


/**
 * @description: 'fetchNotice()' é usado para fazer 'fetch' na 'API' e retornar o resultado de forma 'Async',
 * "action" definida na chamada do "this.props.dispatch(type: "any", exemple: exemple), e usa action.exemple.
 * 
 * @param {Action} action
 */
function* fetchNotice(action) {
   try {
      const notice = yield call(Api, action.text, action.country);
      yield put({type: "initial", notices: notice});
   } catch (e) {
      console.log(e)
   }
}

/**
 * @description: 'mySaga()' exporta 'type: "NOTICE_FETCH_REQUESTED"'.
 */
function* mySaga() {
    yield takeEvery("NOTICE_FETCH_REQUESTED", fetchNotice);
}

export default mySaga;
