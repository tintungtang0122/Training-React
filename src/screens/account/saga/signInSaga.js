import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../utils/Apis';
import * as SignInAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* signIn(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.LOGIN, JSON.stringify(action.payload))
    );
    if (response.ok) {
      const { data }  = response;
      // In case: signup request success
      yield put({
        type: SignInAction.signInSuccess,
        payload: {
          data
        }
      });
    } else {
      // In case: signup request failed
      yield put({
        type: SignInAction.signInFailed
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: SignInAction.signInFailed });
  }
}

function* signInSaga() {
  yield takeLatest(SignInAction.signIn, signIn);
}

export default signInSaga;
