import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, MenuList, NavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
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
        </Container>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
