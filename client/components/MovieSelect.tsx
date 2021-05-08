import { SearchResult } from '@common/types';
import React from 'react';
import Select from 'react-select/async';
import debounce from 'debounce-promise';
import { findMovies } from '../util/services/movies';

interface MovieSelectProps {
  onSelect: (movie: SearchResult) => void;
}

const loadOptions = debounce(async (inputValue: string) => {
  if (inputValue.length < 3) {
    return [];
  }
  console.log(`Searching for ${inputValue}`);
  const movies = await findMovies(inputValue);
  return movies.Search;
}, 500);

const MovieSelect: React.FC<MovieSelectProps> = ({ onSelect }) => {
  const onChange = (value: SearchResult | null) => {
    if (value) {
      onSelect(value);
    }
  };

  return (
    <Select
      cacheOptions
      loadOptions={loadOptions}
      getOptionLabel={(o) => o.Title}
      getOptionValue={(o) => o.imdbID}
      onChange={onChange}
    />
  );
};

export default MovieSelect;
