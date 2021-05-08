import { SearchResult } from '@common/types';
import React from 'react';
import Select from 'react-select/async';
import { ErrorMessage, useField } from 'formik';
import debounce from 'debounce-promise';
import { findMovies } from '../util/services/movies';
import Option from './Option';
import Label from '../components/Label';

interface MovieSelectProps {
  name: string;
  required?: boolean;
}

const loadOptions = debounce(async (inputValue: string) => {
  if (inputValue.length < 3) {
    return [];
  }
  // eslint-disable-next-line no-console
  console.log(`Searching for ${inputValue}`);
  const movies = await findMovies(inputValue);
  return movies.Search;
}, 500);

const MovieSelect: React.FC<MovieSelectProps> = ({
  required, name,
}) => {
  const [,, helpers] = useField<string>(name);

  const onChange = (value: SearchResult | null) => {
    if (value) {
      helpers.setValue(value.imdbID);
    }
  };

  return (
    <>
      <Label
        htmlFor="movie"
        label="Movie"
        required={required}
      />
      <Select
        id="movie"
        className="selector-container"
        classNamePrefix="selector"
        cacheOptions
        loadOptions={loadOptions}
        getOptionLabel={(o) => o.Title}
        getOptionValue={(o) => o.imdbID}
        onChange={onChange}
        onBlur={() => helpers.setTouched(true)}
        components={{ Option }}
        defaultOptions
        placeholder="Search movies"
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </>
  );
};

export default MovieSelect;
