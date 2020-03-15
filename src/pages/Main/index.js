import React, { useEffect, useState } from 'react';

import { getAllDragons, deleteDragon, updateDragon } from '../../services/api';
import ListItem from '../../components/ListItem';
import sortArrayByName from '../../utils/sortArrayByName';

import logo from '../../assets/images/iconfinder_dragon_128px.png';

import './styles.css';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const [dragons, setDragons] = useState([]);

  const history = useHistory();

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
        <img src={logo} alt="" />
        <h1>Dragon Manager</h1>
      </header>
      <div className="list-container-button">
        <button onClick={() => history.push('/register')}>Add Dragon</button>
      </div>
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
