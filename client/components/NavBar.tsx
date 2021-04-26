import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../util/hooks/useAuth';

const NavBar: React.FC = () => {
  const [{ username }] = useAuth();

  return (
    <div className="bg-gray-700">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-1 flex items-center justify-start">
            <div className="flex space-x-4">
              <NavLink exact to="/" className="router" activeClassName="selected">Movie list</NavLink>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            {!username ? (
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
                <div className="router">Logout</div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
