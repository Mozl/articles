import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  width: 100%;
  background-color: #A92016;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 2rem;
`
const NavLink = styled.li`
  color: white;
  list-style: none;
`

const Nav = () => {
  return(
    <Fragment>
      <Wrapper>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/article2">
          <NavLink>Article 2</NavLink>
        </Link>
        <Link to="/article3">
          <NavLink>Article 3</NavLink>
        </Link>
        <Link to="/article4">
          <NavLink>Article 4</NavLink>
        </Link>
        <Link to="/article5">
          <NavLink>Article 5</NavLink>
        </Link>
      </Wrapper>
    </Fragment>
  )
}

export default Nav;