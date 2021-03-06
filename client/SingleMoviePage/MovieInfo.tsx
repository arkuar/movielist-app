import { Movie } from '@common/types';
import React from 'react';

interface MovieInfoProps {
  movie: Omit<Movie, 'reviews'>;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  movie: {
    title, year, genres, plot, director, starring,
  },
}) => (
  <div className="flex flex-col justify-between p-2">
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="text-sm font-light">
        Released:
        {' '}
        {year}
      </p>
      <h2 className="text-sm font-light">
        {genres && genres.join(', ')}
      </h2>
    </div>
    <div className="flex-col mt-4 md:m-0">
      <div className="flex flex-col md:flex-row items-baseline flex-wrap">
        <h2 className="text-lg font-semibold mr-2">Plot summary</h2>
        <p>{plot}</p>
      </div>
      <div className="flex flex-col md:flex-row items-baseline flex-wrap">
        <h2 className="text-lg font-semibold mr-2">Starring</h2>
        <p>{starring && starring.join(', ')}</p>
      </div>
      <div className="flex flex-col md:flex-row items-baseline flex-wrap">
        <h2 className="text-lg font-semibold mr-2">Director</h2>
        <p>{director}</p>
      </div>
    </div>
  </div>
);

export default MovieInfo;
