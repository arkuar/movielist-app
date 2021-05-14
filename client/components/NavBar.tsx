import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../util/hooks/useAuth';
import { clearUser } from '../util/reducers';

const NavBar: React.FC = () => {
  const [{ username }, dispatch] = useAuth();

  const logOut = () => {
    dispatch(clearUser());
  };

  return (
    <div className="bg-gray-700">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-1 flex items-center justify-start">
            <div className="flex space-x-4">
              <NavLink exact to="/" className="router" activeClassName="selected">Movie list</NavLink>
              {username
                ? <NavLink to="/createreview" className="router" activeClassName="selected">Create review</NavLink>
                : null}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            {!username
              ? (
                <>
                  <Link to="/login" className="router">
                    Login
                  </Link>
                  <Link to="/signup" className="router">
                    Sign up
                  </Link>
                </>
              )
              : (
                <div className="router cursor-pointer" role="link" tabIndex={0} aria-hidden="true" onClick={logOut}>Logout</div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
