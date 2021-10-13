import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieList from '../MovieListPage/MovieList';
import Movie from '../SingleMoviePage/Movie';
import Login from '../LoginPage/Login';
import SignUp from '../SignUpPage/SignUp';
import useAuth from '../util/hooks/useAuth';
import AddReviewForm from '../AddReviewPage/AddReviewForm';
import UserReviewList from '../UserReviewPage/UserReviewList';

const Router: React.FC = () => {
  const [{ username }] = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
      <Route path="/login">
        {username
          ? <Redirect to="/" />
          : <Login />}
      </Route>
      <Route path="/signup">
        {username
          ? <Redirect to="/" />
          : <SignUp />}
      </Route>
      <Route path="/createreview">
        {username
          ? <AddReviewForm />
          : <Redirect to="/" />}
      </Route>
      <Route path="/reviews/:id">
        {username
          ? <UserReviewList />
          : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export default Router;
