import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Router from './components/Router';
import { AuthProvider, authReducer } from './util/contexts/index';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <AuthProvider reducer={authReducer}>
    <BrowserRouter>
      <NavBar />
      <ToastContainer
        autoClose={5000}
        limit={5}
      />
      <Router />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
