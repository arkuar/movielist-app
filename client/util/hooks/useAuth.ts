import React, { useContext } from 'react';
import { AuthAction, AuthContext, AuthState } from '../contexts';

const useAuth = (): [AuthState, React.Dispatch<AuthAction>] => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return authContext;
};

export default useAuth;
