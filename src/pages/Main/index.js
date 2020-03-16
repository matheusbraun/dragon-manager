import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { getAllDragons, deleteDragon, updateDragon } from '../../services/api';
import ListItem from '../../components/ListItem';
import sortArrayByName from '../../utils/sortArrayByName';
import SubHeader from '../../components/SubHeader';
import Button from '../../components/Button';
import './styles.css';

const Main = () => {
  const [dragons, setDragons] = useState([]);

  const history = useHistory();

  const getDragons = useCallback(async () => {
    try {
      const result = await getAllDragons();

      setDragons(result);
    } catch (err) {
      history.push('/error');
    }
  }, [history]);

  useEffect(() => {
    (async () => {
      await getDragons();
    })();
  }, [getDragons]);

  const handleDeleteDragon = async id => {
    try {
      await deleteDragon(id);

      await getDragons();
    } catch (err) {
      history.push('/error');
    }
  };

  const handleUpdateDragon = async payload => {
    try {
      await updateDragon(payload);

      await getDragons();
    } catch (err) {
      history.push('/error');
    }
  };

  return (
    <div className="list-container">
      <SubHeader />
      <div className="list-container-button">
        <Button
          onClickCallback={() => history.push('/register')}
          title="Cadastrar Dragão"
        />
      </div>
      <ul>
        <li className="list-header">
          <span>Nome</span>
          <span>Tipo</span>
          <span>Ações</span>
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
