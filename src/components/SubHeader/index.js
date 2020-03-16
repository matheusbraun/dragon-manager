import React from 'react';

import logo from '../../assets/images/iconfinder_dragon_128px.png';
import './styles.css';

const SubHeader = () => (
  <header className="sub-header">
    <img src={logo} alt="" />
    <h1>Dragon Manager</h1>
  </header>
);

export default SubHeader;
