import { OMDB_API_KEY } from '@common/config';
import axios from 'axios';

const OMDB_API = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

type ResultType = 'movie';

type SearchType = ResultType;

interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: ResultType;
  Poster: string;
}

interface SearchResponse {
  Search: SearchResult[]
  totalResults: number;
}

interface SearchParams {
  s: string
  type?: SearchType
}

const search = async (title: string) => {
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
