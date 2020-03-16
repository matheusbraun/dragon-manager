import React, { useState } from 'react';
import { MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import ListItemEditMode from '../ListItemEditMode';

import './styles.css';

const ListItem = ({ dragon, deleteDragonCallback, updateDragonCallback }) => {
  const [editValues, setEditValues] = useState({ ...dragon });
  const [editMode, setEditMode] = useState(false);

  const history = useHistory();

  const handleOnChange = e => {
    const { name, value } = e.target;

    setEditValues({ ...editValues, [name]: value });
  };

  const handleEditModeClick = () => {
    setEditMode(!editMode);
    setEditValues({ ...dragon });
  };

  const handleUpdateDragon = async () => {
    const { name, type } = editValues;

    if (!name || !type) return;

    await updateDragonCallback(editValues);

    setEditMode(false);
  };

  return (
    <li className="list-item">
      {editMode ? (
        <ListItemEditMode
          handleOnChange={handleOnChange}
          name={editValues.name}
          type={editValues.type}
          handleUpdateDragon={handleUpdateDragon}
          handleEditModeClick={handleEditModeClick}
        />
      ) : (
        <>
          <span>{dragon.name}</span>
          <span>{dragon.type}</span>

          <div className="list-item-buttons">
            <MdRemoveRedEye
              size={24}
              color="green"
              className="list-item-icon"
              onClick={() => history.push(`/details/${dragon.id}`)}
            />
            <MdEdit
              size={24}
              color="orange"
              className="list-item-icon"
              onClick={handleEditModeClick}
            />
            <MdDelete
              size={24}
              color="red"
              className="list-item-icon"
              onClick={() => deleteDragonCallback(dragon.id)}
            />
          </div>
        </>
      )}
    </li>
  );
};

export default ListItem;
