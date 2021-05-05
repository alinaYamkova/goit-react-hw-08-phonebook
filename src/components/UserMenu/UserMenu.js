import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.box}>
    <img className={s.avatar} src={avatar} alt="" width="32" />
    <span className={s.name}>Welcome, {name}</span>
    <button className={s.btn} type="button" onClick={onLogout}>
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