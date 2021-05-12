import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from './components/NavBar';
import Router from './components/Router';
import { AuthProvider, authReducer } from './util/contexts/index';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 5000, limit: 5 });

const App: React.FC = () => (
  <AuthProvider reducer={authReducer}>
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
