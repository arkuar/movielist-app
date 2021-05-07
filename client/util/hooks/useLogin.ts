import { LoginValues } from '@common/types';
import { setUser } from '../contexts';
import loginService from '../services/login';
import useAuth from './useAuth';

const useLogin = (): (values: LoginValues) => Promise<void> => {
  const [, dispatch] = useAuth();

  const logIn = async (credentials: LoginValues): Promise<void> => {
    const user = await loginService.login(credentials);
    dispatch(setUser(user));
  };

  return logIn;
};

export default useLogin;
