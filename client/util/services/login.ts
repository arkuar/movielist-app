import { LoginValues, LoginResponse } from '@common/types';
import axios from 'axios';

const baseUrl = '/api/login';

const login = async (credentials: LoginValues): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(baseUrl, credentials);
  return response.data;
};

export default { login };
