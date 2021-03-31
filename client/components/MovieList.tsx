import React from 'react';
import { Movie } from '../types';

const movies: Movie[] = [
  {
    title: 'Godfather',
    year: 1972,
  },
  {
    title: 'Dark Knight',
    year: 2008,
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
  },
];

const MovieList: React.FC = () => (
  <>
    {movies.map((movie) => (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
      </div>
    ))}
  </>
);

export default MovieList;
