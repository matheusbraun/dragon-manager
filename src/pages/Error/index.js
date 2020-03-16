import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import './styles.css';

const Error = () => {
  const history = useHistory();

  return (
    <div className="error-container">
      <h1>Parece que tivemos um problema.</h1>
      <span>Por favor, tente novamente!</span>
      <Button
        title="Página Inicial"
        onClickCallback={() => history.replace('/')}
      />
    </div>
  );
};

export default Error;
