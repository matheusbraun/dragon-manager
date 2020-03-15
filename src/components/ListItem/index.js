import React, { useState } from 'react';
import {
  MdRemoveRedEye,
  MdEdit,
  MdDelete,
  MdCheck,
  MdCancel,
} from 'react-icons/md';
import { useHistory } from 'react-router-dom';

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
  };

  const handleUpdateDragon = async () => {
    await updateDragonCallback(editValues);

    setEditMode(false);
  };

  const renderEditMode = () => (
    <>
      <input
        id="name"
        name="name"
        onChange={handleOnChange}
        value={editValues.name}
        required
      />
      <input
        id="type"
        name="type"
        onChange={handleOnChange}
        value={editValues.type}
        required
      />
    </>
  );

  const renderEditModeButtons = () => (
    <>
      <MdCheck
        size={24}
        color="green"
        className="list-item-icon"
        onClick={handleUpdateDragon}
      />
      <MdCancel
        size={24}
        color="red"
        className="list-item-icon"
        onClick={handleEditModeClick}
      />
    </>
  );

  return (
    <li className="list-item">
      {editMode ? (
        renderEditMode()
      ) : (
        <>
          <span>{dragon.name}</span>
          <span>{dragon.type}</span>
        </>
      )}
      <div className="list-item-buttons">
        {editMode ? (
          renderEditModeButtons()
        ) : (
          <>
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
          </>
        )}
      </div>
    </li>
  );
};

export default ListItem;
