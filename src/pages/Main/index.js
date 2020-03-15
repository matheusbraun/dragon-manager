import React, { useEffect, useState } from 'react';

import { getAllDragons, deleteDragon, updateDragon } from '../../services/api';
import ListItem from '../../components/ListItem';
import sortArrayByName from '../../utils/sortArrayByName';

import './styles.css';

const Main = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    (async () => {
      await getDragons();
    })();
  }, []);

  const getDragons = async () => {
    const result = await getAllDragons();

    setDragons(result);
  };

  const handleDeleteDragon = async id => {
    await deleteDragon(id);

    await getDragons();
  };

  const handleUpdateDragon = async payload => {
    await updateDragon(payload);

    await getDragons();
  };

  return (
    <div className="list-container">
      <header>
        <img
          src="https://cdn4.iconfinder.com/data/icons/game-of-thrones-4/64/game_of_thrones_game_thrones_series_character_avatar_dragon-128.png"
          alt=""
        />
        <h1>Dragon Manager</h1>
      </header>
      <ul>
        <li className="list-header">
          <span>Name</span>
          <span>Type</span>
          <span>Actions</span>
        </li>
        {sortArrayByName(dragons).map(dragon => (
          <ListItem
            key={dragon.id}
            dragon={dragon}
            deleteDragonCallback={id => handleDeleteDragon(id)}
            updateDragonCallback={payload => handleUpdateDragon(payload)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
