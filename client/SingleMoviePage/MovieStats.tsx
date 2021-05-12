import { Movie, Review } from '@common/types';
import { AnnotationIcon, StarIcon } from '@heroicons/react/outline';
import React from 'react';
import MovieStat from './MovieStat';

type MovieStatsProps = Pick<Movie, 'reviews'>;

const countAverage = (arr: Review[]) => arr.reduce(
  (sum, curr) => sum + curr.rating, 0,
) / arr.length;

const MovieStats: React.FC<MovieStatsProps> = ({ reviews }) => (
  <div className="flex flex-row md:flex-col justify-evenly mt-4 md:mt-0">
    <MovieStat name="Reviews" value={reviews.length} IconComponent={AnnotationIcon} />
    <MovieStat name="Rating" value={countAverage(reviews)} IconComponent={StarIcon} />
  </div>
);

export default MovieStats;
