import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import './styles.css';

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="not-found-container">
      <h1>Página não encontrada</h1>
      <Button
        title="Pagina Inicial"
        onClickCallback={() => history.replace('/')}
      />
    </div>
  );
};

export default NotFound;
