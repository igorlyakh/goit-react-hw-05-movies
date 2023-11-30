import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: blue;
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  height: 40px;
  align-items: center;
  gap: 40px;
`;

export const NavLink = styled(RouterLink)`
  color: #ffffff;
  text-decoration: none;
  &.active {
    color: orange;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
`;
