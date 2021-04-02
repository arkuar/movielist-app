import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Router from './components/Router';

const App: React.FC = () => (
  <BrowserRouter>
    <NavBar />
    <Router />
  </BrowserRouter>
);

export default App;
