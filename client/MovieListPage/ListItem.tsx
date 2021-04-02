import React from 'react';
import { Movie } from '@common/types';

interface ListProps {
  movie: Movie
}

const ListItem: React.FC<ListProps> = ({ movie }) => (
  <div className="group cursor-pointer flex w-3/4 rounded-xl border m-3 shadow-sm hover:shadow-inner hover:bg-gray-200">
    <div className="flex-auto p-5">
      <div className="flex flex-wrap">
        <h2 className="flex-auto text-xl font-semibold">{movie.title}</h2>
        <div className="self-end text-xl font-semibold text-gray-500 group-hover:text-black">{movie.year}</div>
      </div>
    </div>
  </div>
);

export default ListItem;
