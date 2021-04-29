import { Movie as IMovie } from '@common/types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getMovie } from '../util/services/movies';

const Movie: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovie(id);
        setMovie(result);
      } catch (error) {
        history.push('/');
      }
    };
    fetchMovie();
  }, [id, history]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-2 m-5 flex flex-col flow items-center rounded flex-wrap">
      <div className="flex flex-col md:flex-row w-full">
        <img src="https://picsum.photos/200/300" alt="Movie poster" className="rounded-r-md" width="200" height="300" />
        <div className="flex flex-col m-2 justify-around">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{movie.title}</h1>
            <p className="text-sm font-light">
              Released:
              {' '}
              {movie.year}
            </p>
          </div>
          <div className="flex flex-row items-baseline">
            <h2 className="text-xl font-semibold mr-2">Starring:</h2>
            <p>{movie.starring.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
