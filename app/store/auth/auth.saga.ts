import {call, put, takeEvery} from 'redux-saga/effects';
import {login as loginApi} from './auth.api';
import {login, loginFailure, loginSuccess} from './auth.slice';
import {ApiResponse, LoginRequest} from './auth.types';
import {PayloadAction} from '@reduxjs/toolkit';

export function* getAuthRequest(action: PayloadAction<LoginRequest>) {
  try {
    const response: ApiResponse = yield call(loginApi, action.payload);

    if (response.error) {
      yield put(loginFailure(response.error));
    } else if (response.data) {
      yield put(loginSuccess(response.data));
    }
  } catch (err: any) {
    yield put(loginFailure(err));
  }
}

export function* watchGetAuthRequest() {
  yield takeEvery(login.type, getAuthRequest);
}
