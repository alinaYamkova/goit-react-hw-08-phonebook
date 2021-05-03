import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from "../../routes";
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className={s.nav}>
          <NavLink 
            exact 
            to={routes.home} 
            className={s.NavLink}
            activeClassName={s['NavLink-active']}      
          >
            Home
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to={routes.contacts}
              className={s.NavLink}
              activeClassName={s['NavLink-active']}
            >
              Contacts
            </NavLink>
        )}
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);