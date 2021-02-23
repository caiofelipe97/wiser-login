import {Reducer} from 'redux';
import {AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  user: null,
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return {...state, user: null, loading: true, error: false};
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload.data,
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
