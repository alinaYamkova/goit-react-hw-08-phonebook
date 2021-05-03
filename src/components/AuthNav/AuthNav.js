import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import routes from '../../routes'

const AuthNav = () => (
  <nav>
    <NavLink
      to={routes.registration}
      exact
      style={s.link}
      activeStyle={s.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      style={s.link}
      activeStyle={s.activeLink}
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;