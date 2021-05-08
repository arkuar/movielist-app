import { OMDB_API_KEY } from '@common/config';
import { SearchParams, SearchResponse } from '@common/types';
import axios from 'axios';

const OMDB_API = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

const search = async (title: string): Promise<SearchResponse> => {
  const params: SearchParams = {
    s: title,
    type: 'movie',
  };

  const { data: { Search, totalResults } } = await axios.get<SearchResponse>(OMDB_API, { params });
  return {
    Search,
    totalResults,
  };
};

export default {
  search,
};
