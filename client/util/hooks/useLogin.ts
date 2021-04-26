import { LoginValues } from '@common/types';
import { useHistory } from 'react-router-dom';
import loginService from '../services/login';

const useLogin = (): (values: LoginValues) => Promise<void> => {
  const history = useHistory();

  const logIn = async (credentials: LoginValues): Promise<void> => {
    const user = await loginService.login(credentials);
    window.localStorage.setItem('userToken', JSON.stringify(user));
    history.push('/');
  };

  return logIn;
};

export default useLogin;
