import React from 'react';
import { MdCheck, MdCancel } from 'react-icons/md';

import './styles.css';

const ListItemEditMode = ({
  handleOnChange,
  name,
  type,
  handleUpdateDragon,
  handleEditModeClick,
}) => (
  <>
    <input
      id="name"
      name="name"
      className="edit-mode-input"
      onChange={handleOnChange}
      value={name}
      required
    />
    <input
      id="type"
      name="type"
      className="edit-mode-input"
      onChange={handleOnChange}
      value={type}
      required
    />
    <div className="list-item-buttons">
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
    </div>
  </>
);

export default ListItemEditMode;
