import { Icon } from '@common/types';
import React from 'react';

interface MovieStatProps {
  name: string;
  value: number | string;
  IconComponent?: Icon;
}

const MovieStat: React.FC<MovieStatProps> = ({
  name, value, IconComponent,
}) => (
  <div className="flex flex-col items-center">
    <h2 className="text-lg font-semibold">{name}</h2>
    <span className="relative">
      {IconComponent && <IconComponent className="absolute w-6 h-6 left-0" />}
      <p className="ml-8">{value}</p>
    </span>
  </div>
);

export default MovieStat;
