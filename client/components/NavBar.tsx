import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => (
  <div className="bg-gray-700">
    <div className="px-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-14">
        <div className="flex-1 flex items-center justify-start">
          <div className="flex space-x-4">
            <NavLink to="/" className="router" activeClassName="selected">Movie list</NavLink>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          {/* TODO: Login/register navlinks */}
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;