import React from 'react';
import { Movie } from '@common/types';
import { Link } from 'react-router-dom';

interface ListProps {
  movie: Movie
}

const ListItem: React.FC<ListProps> = ({ movie }) => (
  <Link
    to={`/movies/${movie.id}`}
    className="group cursor-pointer flex w-3/4 rounded-xl max-h-32 border m-3 shadow-sm hover:shadow-inner hover:bg-gray-200"
  >
    {movie.poster && (
      <div className="flex flex-none w-20">
        <img src={movie.poster} alt="Movie poster" className="rounded object-cover" />
      </div>
    )}
    <div className="flex-1 p-5 self-center">
      <div className="flex flex-col md:flex-row">
        <h2 className="flex-auto text-xl font-semibold">{movie.title}</h2>
        <div className="md:self-end text-xl font-semibold text-gray-500 group-hover:text-black">{movie.year}</div>
      </div>
    </div>
  </Link>
);

export default ListItem;
