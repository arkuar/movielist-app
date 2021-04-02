import MovieList from 'client/MovieListPage/MovieList';
import React from 'react';
import { Route, Switch } from 'react-router';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <MovieList />
    </Route>
  </Switch>
);

export default Router;
