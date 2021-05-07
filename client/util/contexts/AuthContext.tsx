import React, {
  createContext, Dispatch, Reducer, useEffect, useReducer,
} from 'react';
import useToaster from '../hooks/useToaster';
import { deleteAuthHeader, setAuthHeader } from '../services/api';
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
  const { success } = useToaster();

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('userToken', JSON.stringify(state));
    } else {
      localStorage.removeItem('userToken');
    }
  }, [state]);

  useEffect(() => {
    if (state.token) {
      setAuthHeader(state.token);
    } else {
      deleteAuthHeader();
    }
  }, [state.token]);

  useEffect(() => {
    if (state.username) {
      success(`Welcome back ${state.username}`);
    }
  }, [state.username, success]);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
