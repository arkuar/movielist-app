import { OMDB_API_KEY } from '@common/config';
import { SearchParams, SearchResponse } from '@common/types';
import axios from 'axios';

const OMDB_API = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

const search = async (title: string): Promise<SearchResponse> => {
  try {
    const params: SearchParams = {
      s: title,
      type: 'movie',
    };

    const { data } = await axios.get<SearchResponse>(OMDB_API, { params });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  search,
};
