import { Movie as IMovie } from '@common/types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
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
    return <Loading />;
  }

  return (
    <div className="border-2 m-0 md:m-5 flex flex-col items-center rounded flex-wrap">
      <div className="flex flex-col md:flex-row w-full">
        {movie.poster && <img src={movie.poster} alt="Movie poster" className="rounded md:rounded-r-md" width="200" height="300" />}
        <div className="flex flex-col md:flex-row justify-between p-6 w-full">
          <div className="flex flex-col m-2 justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{movie.title}</h1>
              <p className="text-sm font-light">
                Released:
                {' '}
                {movie.year}
              </p>
              <h2 className="text-sm font-light">
                {movie.genres?.join(', ')}
              </h2>
            </div>
            <div className="flex-col mt-4 md:m-0">
              <div className="flex flex-col md:flex-row items-baseline">
                <h2 className="text-lg font-semibold mr-2">Plot summary</h2>
                <p>{movie.plot}</p>
              </div>
              <div className="flex flex-col md:flex-row items-baseline">
                <h2 className="text-lg font-semibold mr-2">Starring</h2>
                <p>{movie.starring.join(', ')}</p>
              </div>
              <div className="flex flex-col md:flex-row items-baseline">
                <h2 className="text-lg font-semibold mr-2">Director</h2>
                <p>{movie.director}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-evenly mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row items-center md:items-baseline">
              <h2 className="text-lg mr-2 font-semibold">Reviews</h2>
              <p>{movie.reviews.length}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-baseline">
              <h2 className="text-lg mr-2 font-semibold">Average rating</h2>
              <p>
                {movie.reviews.reduce(
                  (sum, current) => sum + current.rating, 0,
                ) / movie.reviews.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
