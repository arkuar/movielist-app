import { Movie, SearchResponse } from '@common/types';
import axios from './api';

const baseUrl = '/api/movies';

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(baseUrl);
  return response.data;
};

export const getMovie = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(`${baseUrl}/${id}`);
  return response.data;
};

export const findMovies = async (title: string): Promise<SearchResponse> => {
  const params = { title };
  const response = await axios.get<SearchResponse>(`${baseUrl}/search`, { params });
  return response.data;
};
