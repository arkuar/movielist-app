import { Movie, Review } from '@common/types';
import { AnnotationIcon, StarIcon } from '@heroicons/react/outline';
import React from 'react';
import MovieStat from './MovieStat';

type MovieStatsProps = Pick<Movie, 'reviews'>;

const countAverage = (arr: Review[]) => {
  const value = arr.reduce((sum, curr) => sum + curr.rating, 0) / arr.length;
  if (Number.isNaN(value)) {
    return 'N/A';
  }
  return Math.round(value * 10) / 10;
};

const MovieStats: React.FC<MovieStatsProps> = ({ reviews }) => (
  <div className="flex flex-row md:flex-col justify-evenly md:mr-10">
    <MovieStat name="Reviews" value={reviews.length} IconComponent={AnnotationIcon} />
    <MovieStat
      name="Rating"
      value={countAverage(reviews)}
      IconComponent={StarIcon}
    />
  </div>
);

export default MovieStats;
