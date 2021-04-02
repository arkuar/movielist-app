import axios from 'axios';
import { Movie } from '@common/types';

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
