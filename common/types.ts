import React from 'react';

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
  passwordHash: string;
  name?: string;
}

export type NewUser = Omit<User, 'id'>;

export type LoginValues = {
  password: string;
} & Pick<User, 'username'>;

export type LoginResponse = {
  token: string;
} & Pick<User, 'username' | 'name'>;

export type Icon = (props: React.ComponentProps<'svg'>) => JSX.Element;
