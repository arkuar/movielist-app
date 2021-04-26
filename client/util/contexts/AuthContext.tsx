import React, {
  createContext, Dispatch, Reducer, useEffect, useReducer,
} from 'react';
import { AuthAction, AuthState } from './reducers';

const currentUser = localStorage.getItem('userToken');

const username = currentUser
  ? JSON.parse(currentUser).username
  : undefined;

const token = currentUser
  ? JSON.parse(currentUser).token
  : undefined;

const initialState: AuthState = {
  username,
  token,
};

export const AuthContext = createContext<[AuthState, Dispatch<AuthAction>]>([
  initialState,
  () => initialState,
]);

interface AuthProviderProps {
  reducer: Reducer<AuthState, AuthAction>
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('userToken', JSON.stringify(state));
    } else {
      localStorage.removeItem('userToken');
    }
  }, [state]);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
