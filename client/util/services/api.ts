import axios from 'axios';

const api = axios.create();

export const setAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAuthHeader = (): void => {
  delete api.defaults.headers.common.Authorization;
};

export default api;
