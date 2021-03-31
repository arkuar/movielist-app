import { Movie } from 'common/types';
import React from 'react';
import ListItem from './ListItem';

const movies: Movie[] = [];

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
