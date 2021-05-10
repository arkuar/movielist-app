import { Movie, SearchResponse } from '@common/types';
import axios from './api';

const basePath = '/api/movies';

// eslint-disable-next-line import/prefer-default-export
export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(basePath);
  return response.data;
};

export const getMovie = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(`${basePath}/${id}`);
  return response.data;
};

export const findMovies = async (title: string): Promise<SearchResponse> => {
  const params = { title };
  const response = await axios.get<SearchResponse>(`${basePath}/search`, { params });
  return response.data;
};
