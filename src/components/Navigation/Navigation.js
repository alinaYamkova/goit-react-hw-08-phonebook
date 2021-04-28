import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from "../../routes";
import isAuthenticated from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className={s.nav}>
      <ul className={styles.NavLinksList}>
        <li>
          <NavLink exact to={routes.home} className={s.navLink} >
            {/* <Logo /> */}
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.home} className={styles.NavLink}
            activeClassName={styles['NavLink-active']}      
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className={styles.NavLink}
              activeClassName={styles['NavLink-active']}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);