import { SearchResult } from '@common/types';
import React, { useState } from 'react';
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

const MovieSelect: React.FC<MovieSelectProps> = ({
  required, name,
}) => {
  const [, , helpers] = useField<string>(name);
  const [error, setError] = useState<string>();

  const onChange = (value: SearchResult | null) => {
    if (value) {
      helpers.setValue(value.imdbID);
    }
  };

  const loadOptions = debounce(async (inputValue: string): Promise<SearchResult[]> => {
    const movies = await findMovies(inputValue);
    if (!movies.Response) {
      setError(movies.Error);
    }
    return movies.Search;
  }, 500);

  const noOptionsMessage = (): string | null => {
    if (error) {
      return error;
    }
    return null;
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
        placeholder="Search movie titles"
        noOptionsMessage={noOptionsMessage}
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </>
  );
};

export default MovieSelect;
