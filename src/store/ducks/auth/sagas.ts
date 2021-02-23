import {call, put} from 'redux-saga/effects';
import api from '../../../services';
import {LoginProps, User, AuthTypes} from './types';

import {loginSuccess, loginFailure} from './actions';
import { Action } from 'redux';

interface LoginAction {
  type: AuthTypes.LOGIN_REQUEST;
  payload: LoginProps;
}
export function* login(action: LoginAction) {
  try {
    const { email, password } = action.payload;
    const response = yield call(api.get, 'users', { params: { email, password}});
    console.log(response.data)
    const userExists = response?.data?.find((user: User)=> user.email === email && user.password === password);
    console.log(userExists);
    if(userExists){
      yield put(loginSuccess(userExists));
    } else {
      yield put(loginFailure());
    }
  } catch (err) {
    yield put(loginFailure());
  }
}
