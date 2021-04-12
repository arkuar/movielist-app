export interface Movie {
  id: string;
  title: string;
  year: number;
  starring: string[];
}

export type NewMovie = Omit<Movie, 'id'>;
