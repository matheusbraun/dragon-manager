import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/user';
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
      <img
        src="https://cdn4.iconfinder.com/data/icons/game-of-thrones-4/64/game_of_thrones_game_thrones_series_character_avatar_dragon-512.png"
        alt="App Logo"
        onClick={handleLogoClick}
      />
      {authenticated && <button onClick={handleLogoutClick}>Sair</button>}
    </div>
  );
};

export default Header;
