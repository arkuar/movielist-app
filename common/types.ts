import {
  Schema, SchemaType, SchemaTypeOpts, Document,
} from 'mongoose';
import React from 'react';

export interface Movie {
  id: string;
  title: string;
  year: number;
  starring: string[];
}

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

export type Icon = (props: React.ComponentProps<'svg'>) => JSX.Element;
