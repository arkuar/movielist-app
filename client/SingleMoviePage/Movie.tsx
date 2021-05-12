import { Movie as IMovie } from '@common/types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getMovie } from '../util/services/movies';
import ReviewList from '../ReviewList/ReviewList';
import MovieInfo from './MovieInfo';
import MovieStats from './MovieStats';

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
    <>
      <div className="border-2 m-0 md:m-5 flex flex-col items-center rounded flex-wrap bg-gray-100">
        <div className="flex flex-col md:flex-row w-full items-center md:items-stretch">
          {movie.poster && <img src={movie.poster} alt="Movie poster" className="rounded md:rounded-r-md" width="200" height="300" />}
          <div className="flex flex-col md:flex-row justify-between p-6 w-full">
            <MovieInfo
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              director={movie.director}
              starring={movie.starring}
              plot={movie.plot}
            />
            <MovieStats
              reviews={movie.reviews}
            />
          </div>
        </div>
      </div>
      <ReviewList reviews={movie.reviews} />
    </>
  );
};

export default Movie;
