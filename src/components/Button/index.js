import React from 'react';

import './styles.css';

const Button = ({
  type = 'button',
  disabled = false,
  onClickCallback = () => null,
  cssClass = '',
  title,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClickCallback}
    className={`ui-button ${cssClass}`}
  >
    {title}
  </button>
);

export default Button;
