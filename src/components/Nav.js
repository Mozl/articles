import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BBC_logo_white from '../images/BBC_logo_white.png'

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
          <img tabIndex="1" id="home-link" src={BBC_logo_white} alt="Home" width="100" height="30" />
        </Link>
        <Link to="/article2">
          <NavLink tabIndex="2" id="article2-link">Article 2</NavLink>
        </Link>
        <Link to="/article3">
          <NavLink tabIndex="3" id="article3-link">Article 3</NavLink>
        </Link>
        <Link to="/article4">
          <NavLink tabIndex="4" id="article4-link">Article 4</NavLink>
        </Link>
        <Link to="/article5">
          <NavLink tabIndex="5" id="article5-link">Article 5</NavLink>
        </Link>
      </Wrapper>
    </Fragment>
  )
}

export default Nav;