import React, { useContext } from 'react';
import { AuthContext } from '../contexts';
import { AuthAction, AuthState } from '../reducers';

const useAuth = (): [AuthState, React.Dispatch<AuthAction>] => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return authContext;
};

export default useAuth;
