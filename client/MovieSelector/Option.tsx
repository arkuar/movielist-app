import React from 'react';
import { components, OptionProps } from 'react-select';
import { SearchResult } from '@common/types';

const Option: React.FC<OptionProps<SearchResult, false>> = ({ children, ...props }) => {
  const { Poster, Year } = props.data as SearchResult;
  return (
    <components.Option {...props}>
      <div className="flex flex-row items-center w-full">
        <img src={Poster} alt="Movie poster" height="50" width="50" />
        <div className="flex-col w-10/12 text-center">
          <p className="font-semibold">{children}</p>
          <p>{Year}</p>
        </div>
      </div>
    </components.Option>
  );
};

export default Option;
