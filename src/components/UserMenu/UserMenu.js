import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './def-avatar.png';
import s from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={s.container}>
    <img src={avatar} alt="" width="32" style={s.avatar} />
    <span style={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);