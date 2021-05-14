import { Movie, Review } from '@common/types';

export type MovieState = {
  movie: Omit<Movie, 'reviews'> | undefined,
  reviews: Review[]
};

export type MovieAction =
  | {
    type: 'SET_MOVIE',
    payload: Movie,
  }
  | {
    type: 'REMOVE_REVIEW',
    payload: string,
  };

export const setMovie = (movie: Movie): MovieAction => ({
  type: 'SET_MOVIE',
  payload: movie,
});

export const removeReview = (id: string): MovieAction => ({
  type: 'REMOVE_REVIEW',
  payload: id,
});

export const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case 'SET_MOVIE': {
      const { reviews, ...movie } = action.payload;
      return {
        movie,
        reviews,
      };
    }
    case 'REMOVE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter((r) => r.id !== action.payload),
      };
    default:
      return state;
  }
};
