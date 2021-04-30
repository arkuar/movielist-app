import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Router from './components/Router';
import { AuthProvider, authReducer } from './util/contexts/index';

const App: React.FC = () => (
  <AuthProvider reducer={authReducer}>
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Router />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
