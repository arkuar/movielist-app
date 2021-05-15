import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from './components/NavBar';
import Router from './components/Router';
import { AuthProvider, DialogProvider } from './util/contexts';
import { authReducer } from './util/reducers';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 5000, limit: 5, pauseOnFocusLoss: false });

const App: React.FC = () => (
  <AuthProvider reducer={authReducer}>
    <DialogProvider>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </DialogProvider>
  </AuthProvider>
);

export default App;
