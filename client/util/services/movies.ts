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

const testResult = {
  Search: [
    {
      Title: 'Chaos',
      Year: '2005',
      imdbID: 'tt0402910',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTc3NDU0MTgyN15BMl5BanBnXkFtZTcwNjgwMzY4NA@@._V1_SX300.jpg',
    },
    {
      Title: 'Chaos Theory',
      Year: '2008',
      imdbID: 'tt0460745',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTAzMjA1NTExNzVeQTJeQWpwZ15BbWU3MDI4OTI1NjE@._V1_SX300.jpg',
    },
    {
      Title: 'The Chaos Class Failed the Class',
      Year: '1976',
      imdbID: 'tt0252488',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTljMDNkNmYtY2JlZS00OGYxLTgyNGItMDM3YmY4MjljNTc5XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg',
    },
    {
      Title: 'A Little Chaos',
      Year: '2014',
      imdbID: 'tt2639254',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjI3Mzg5ODkwM15BMl5BanBnXkFtZTgwNjc3MDMzNTE@._V1_SX300.jpg',
    },
    {
      Title: 'The Chaos Class Is Waking Up',
      Year: '1977',
      imdbID: 'tt0252490',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMDk3NTRlMzgtZDc3OS00MGY4LWFlYjEtOTAyODA2MWEwN2Y3XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg',
    },
    {
      Title: 'The Chaos Class Is on Vacation',
      Year: '1977',
      imdbID: 'tt0252489',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYmY3ZTMzMWQtNDhiYS00ZTE1LThhNzItYjk2MDU0OWM2MDBkXkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg',
    },
    {
      Title: 'Chaos Walking',
      Year: '2021',
      imdbID: 'tt2076822',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTcxYTk3MWQtZThlMS00ZjQ0LTg0NjktNGVkNWM2MTAyYWJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Chaos',
      Year: '2018',
      imdbID: 'tt4669296',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjUwNDA3MTgwOV5BMl5BanBnXkFtZTgwNTEzMjk5NjM@._V1_SX300.jpg',
    },
    {
      Title: 'The Class of Chaos 3,5',
      Year: '2005',
      imdbID: 'tt0494501',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhZDliYTUtODk3Yy00N2I1LWI2YTUtOTAxZGZiMGEwOTExXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Chaos Class in the Military',
      Year: '2005',
      imdbID: 'tt0427323',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMWVlMzE5ZGYtNWJkMS00NDQwLWIxZjQtODNhNTBkNDVkNGYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg',
    },
  ],
  totalResults: '344',
};

/* eslint-disable */
export const findMovies = async (_title: string): Promise<SearchResponse> => {
  // const params = { title };
  // const response = await axios.get<SearchResponse>(`${basePath}/search`, { params });
  return testResult as unknown as SearchResponse;
};
/* eslint-enable */
