import { LoginResponse } from '@common/types';

export type AuthState = {
  username?: string;
  token?: string;
  name?: string;
};

export type AuthAction =
  | {
    type: 'SET_USER',
    payload: LoginResponse,
  }
  | {
    type: 'CLEAR_USER',
  };

export const setUser = (user: LoginResponse): AuthAction => ({
  type: 'SET_USER',
  payload: user,
});

export const clearUser = (): AuthAction => ({
  type: 'CLEAR_USER',
});

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        username: action.payload.username,
        token: action.payload.token,
      };
    case 'CLEAR_USER':
      return {
        username: undefined,
        token: undefined,
      };
    default:
      return state;
  }
};
