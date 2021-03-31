import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList';

const App: React.FC = () => (
  <div>
    <MovieList />
  </div>
);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
