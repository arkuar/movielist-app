import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from '../MovieListPage/MovieList';
import Movie from '../MovieListPage/Movie';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <MovieList />
    </Route>
    <Route path="/movies/:id">
      <Movie />
    </Route>
  </Switch>
);

export default Router;
