import React from 'react';
import { Movie } from '../types';

interface ListProps {
  movie: Movie
}

const ListItem: React.FC<ListProps> = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <p>{movie.year}</p>
  </div>
);

export default ListItem;
