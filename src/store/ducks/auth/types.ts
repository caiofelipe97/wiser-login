export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
}

export interface LoginProps {
  email: string;
  password: string;
}

/**
 * Data types
 */
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


/**
 * State type
 */
export interface AuthState {
  readonly user: User | null;
  readonly loading: boolean;
  readonly error: boolean;
}
