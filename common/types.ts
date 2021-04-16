export interface Movie {
  id: string;
  title: string;
  year: number;
  starring: string[];
}

export type NewMovie = Omit<Movie, 'id'>;

export interface User {
  id: string;
  username: string;
  passwordHash?: string;
  name?: string;
}
