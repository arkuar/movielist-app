import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

const App: React.FC = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

export default App;
