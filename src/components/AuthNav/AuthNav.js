import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';
import routes from '../../routes';

const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to={routes.registration}
        exact
        className={s.link}
        activeClassName={s['NavLink-active']}
      >
        Registration
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        className={s.link}
        activeClassName={s['NavLink-active']}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
