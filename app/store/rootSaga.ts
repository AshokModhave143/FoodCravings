import {all} from 'redux-saga/effects';
import {watchGetAuthRequest} from './auth/auth.saga';

export default function* rootSaga() {
  yield all([watchGetAuthRequest()]);
}
