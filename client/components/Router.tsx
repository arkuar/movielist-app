import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from '../MovieListPage/MovieList';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <MovieList />
    </Route>
  </Switch>
);

export default Router;
