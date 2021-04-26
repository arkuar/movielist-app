import { SignUpValues, SignUpResponse } from '@common/types';
import axios from './api';

const baseUrl = '/api/users';

const signup = async ({ username, name, password }: Omit<SignUpValues, 'passwordConfirmation'>): Promise<SignUpResponse> => {
  const response = await axios.post<SignUpResponse>(baseUrl, { username, name, password });
  return response.data;
};

export default {
  signup,
};
