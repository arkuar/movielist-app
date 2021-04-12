import { Movie as IMovie } from '@common/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../util/services/movies';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await getMovie(id);
      setMovie(result);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Invalid ID</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>
        Released:
        {movie.year}
      </p>
      <p>
        Starring:
        {movie.starring.join(', ')}
      </p>
    </div>
  );
};

export default Movie;
