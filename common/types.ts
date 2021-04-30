import {
  Schema, SchemaType, SchemaTypeOpts, Document,
} from 'mongoose';
import React from 'react';

export interface BaseMovie {
  title: string;
  year: number;
  starring: string[];
}

export interface MovieModel extends BaseMovie, Document {
  id: string;
}

type SharedKeys<T, U> = Extract<keyof T, keyof U>;

export type Movie = Pick<MovieModel, 'id' | SharedKeys<MovieModel, BaseMovie>>;

export type NewMovie = Omit<Movie, 'id'>;

export interface BaseUser {
  username: string;
  passwordHash: string;
  name?: string;
}

export interface UserModel extends BaseUser, Document { }

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
  movie: Movie['id'];
  user: string;
}

export type NewReview = BaseReview;

export interface ReviewModel extends BaseReview, Document {
  id: string;
}
