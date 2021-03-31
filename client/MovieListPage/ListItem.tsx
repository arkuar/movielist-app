import React from 'react';
import { Movie } from '@common/types';

interface ListProps {
  movie: Movie
}

const ListItem: React.FC<ListProps> = ({ movie }) => (
  <div className="flex w-3/4 rounded-xl border m-3 hover:bg-gray-200">
    <div className="flex-auto p-5">
      <div className="flex flex-wrap">
        <h2 className="flex-auto text-xl font-semibold">{movie.title}</h2>
        <div className="self-end text-xl font-semibold text-gray-400">{movie.year}</div>
      </div>
    </div>
  </div>
);

export default ListItem;
