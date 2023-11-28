import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, MenuList, NavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <MenuList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </MenuList>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
