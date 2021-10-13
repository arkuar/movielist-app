import { Route } from '@common/types';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../util/hooks/useAuth';
import { clearUser } from '../util/reducers';

const routes: Route[] = [
  {
    title: 'Movie list',
    authRequired: false,
    path: '/',
    exact: true,
  },
  {
    title: 'Create review',
    authRequired: true,
    path: '/createreview',
  },
  {
    title: 'My reviews',
    authRequired: true,
    path: '/reviews',
  },
];

const NavBar: React.FC = () => {
  const [{ username }, dispatch] = useAuth();

  const logOut = () => {
    dispatch(clearUser());
  };

  const buildRoutes = () => routes.map((r) => {
    const el = <NavLink key={r.title} exact={r.exact} to={r.path} className="router" activeClassName="selected">{r.title}</NavLink>;
    if (!r.authRequired || (r.authRequired && username)) {
      return el;
    }
    return null;
  });

  return (
    <div className="bg-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="sm:hidden text-white">
            <Menu as="div" className="relative inline-block text-left">
              <div className="inline-flex justify-center w-full px-4 py-2">
                <Menu.Button>
                  <MenuIcon className="h-6 w-6" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95 translate-y-2"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95 translate-y-2"
              >
                <Menu.Items className="absolute left-0 w-56 mt-2 bg-gray-700 rounded-md shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none">
                  <div className="p-2 space-y-1 text-gray-800">
                    {buildRoutes().map((item) => (
                      item && (
                        <Menu.Item as="div" key={item.key}>
                          {item}
                        </Menu.Item>
                      )
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="hidden sm:flex items-center justify-start">
            <div className="flex space-x-4">
              {buildRoutes()}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            {!username
              ? (
                <>
                  <NavLink to="/login" className="router" activeClassName="selected">
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="router" activeClassName="selected">
                    Sign up
                  </NavLink>
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
