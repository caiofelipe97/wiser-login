import {action} from 'typesafe-actions';
import {AuthTypes, User} from './types';
import {LoginProps} from './types';

export const loginRequest = (props: LoginProps) => action(AuthTypes.LOGIN_REQUEST, {email: props.email, password: props.password});

export const loginSuccess = (user: User) =>
  action(AuthTypes.LOGIN_SUCCESS, {data: user});

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE);
