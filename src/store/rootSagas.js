// import libs
import { all } from 'redux-saga/effects';
// sign in
import singInSaga from '../screens/account/saga/signInSaga';

export default function* RootSagas() {
  yield all([
    singInSaga()
  ]);
}
