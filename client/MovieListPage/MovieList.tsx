import { Movie } from '@common/types';
import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { getMovies } from '../util/services/movies';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const result = await getMovies();
    setMovies(result);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {movies.map((movie) => (
        <ListItem
          key={movie.title}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieList;
