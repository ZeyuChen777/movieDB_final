import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const NavBar = styled.div`
  display: flex;
  background: #3f51b5;
  padding: 0px 10px;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100px;
`;

const Item = styled.li`
  font-size: 1.5vw;
  font-weight: 600;
  color: white;
  margin-left: 0.2vw;
  font-family: Helvetica;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;


const Header = () => {
  return (
    <>
    <NavBar>
      <NavList>
        <Box width="100px" p={1} mr={3}>
            <img src={logo} alt='logo' style={{maxWidth: '100%', height: 'auto'}} />
        </Box>
        <StyledLink to="/"><Item>HOME</Item></StyledLink>
        <StyledLink to="/favorite"><Item>FAVORITE</Item></StyledLink>
        <StyledLink to="/rated"><Item>RATED</Item></StyledLink>
      </NavList>
    </NavBar>
    </>
  );
};

export default Header;