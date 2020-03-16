import React from 'react';

import './styles.css';

const Input = ({
  label,
  name,
  disabled = false,
  handleOnChange = () => null,
  value,
  required = false,
  type = 'text',
}) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input
      name={name}
      disabled={disabled}
      onChange={handleOnChange}
      value={value}
      required={required}
      type={type}
    />
  </div>
);

export default Input;
