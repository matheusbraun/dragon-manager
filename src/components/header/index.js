import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/user';
import logo from '../../assets/images/iconfinder_dragon_64px.png';

import './styles.css';

const Header = () => {
  const { authenticated, removeUserAuthenticated } = useContext(UserContext);
  const history = useHistory();

  const handleLogoutClick = () => {
    removeUserAuthenticated();
    history.push('/login');
  };

  const handleLogoClick = () => {
    if (authenticated) history.push('/');
  };

  return (
    <div className="topnav">
      <img src={logo} alt="App Logo" onClick={handleLogoClick} />
      {authenticated && <button onClick={handleLogoutClick}>Sair</button>}
    </div>
  );
};

export default Header;
