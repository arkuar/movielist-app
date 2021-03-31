import React from 'react';
import { Movie } from '../types';
import ListItem from './ListItem';

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
  <div className="flex flex-col items-center">
    {movies.map((movie) => (
      <ListItem
        key={movie.title}
        movie={movie}
      />
    ))}
  </div>
);

export default MovieList;
