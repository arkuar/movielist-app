import {
  Schema, SchemaType, SchemaTypeOpts, Document, PopulatedDoc,
} from 'mongoose';
import React from 'react';

// Extend the Express.Request interface with a token property
declare module 'express-serve-static-core' {
  interface Request {
    token: string | null;
  }
}

export interface BaseMovie {
  title: string;
  year: number;
  starring: string[];
  reviews: Review[]
  imdbId: string;
  poster?: string;
  director: string;
  genres?: string[];
  plot?: string;
}

export interface MovieModel extends BaseMovie, Document {
  id: string;
}

type SharedKeys<T, U> = Extract<keyof T, keyof U>;

export type Movie = Pick<MovieModel, 'id' | SharedKeys<MovieModel, BaseMovie>>;

export type NewMovie = Omit<Movie, 'id' | 'reviews'>;

export interface BaseUser {
  username: string;
  passwordHash: string;
  name?: string;
}

export interface UserModel extends BaseUser, Document { }

export type User = Pick<UserModel, 'id' | SharedKeys<UserModel, BaseUser>>;

export type NonSensitiveUser = Omit<User, 'passwordHash'>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SchemaFields<T> = Record<keyof T, SchemaTypeOpts<any> | Schema | SchemaType>;

export type NewUser = Omit<BaseUser, 'id'>;

export type LoginValues = {
  password: string;
} & Pick<BaseUser, 'username'>;

export type LoginResponse = {
  token: string;
} & Pick<BaseUser, 'username' | 'name'>;

export type SignUpValues = {
  password: string;
  passwordConfirmation: string;
} & Pick<BaseUser, 'username' | 'name'>;

export type SignUpResponse = Omit<BaseUser, 'passwordHash'>;

export type Icon = (props: React.ComponentProps<'svg'>) => JSX.Element;

export interface BaseReview {
  text: string;
  rating: number;
  movie: Movie;
  user: NonSensitiveUser | PopulatedDoc<BaseUser>;
}

export interface NewReview extends Omit<BaseReview, 'movie' | 'user'> {
  movie: string;
  user: string;
}

export interface Review extends Pick<ReviewModel, 'id' | SharedKeys<ReviewModel, BaseReview>> {
  movie: Movie;
  user: NonSensitiveUser;
}

export interface ReviewModel extends BaseReview, Document {
  id: string;
}

export type ReviewValues = Omit<NewReview, 'user'>;

export interface PostReview {
  rating: number;
  movieId: string;
  text: string;
}

export interface Token {
  username: string;
  id: string;
}

export type ResultType = 'movie';

export type SearchType = ResultType;

export interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: ResultType;
  Poster: string;
}

export interface SearchResponse {
  Search: SearchResult[]
  totalResults: number;
  Response: boolean;
  Error?: string;
}

export interface MovieDetails extends SearchResult {
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
}

export interface SearchParams {
  s: string
  type?: SearchType
}

export interface SearchByIDParams {
  i: string;
}
