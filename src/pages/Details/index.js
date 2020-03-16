import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getDragonDetails } from '../../services/api';
import SubHeader from '../../components/SubHeader';
import Button from '../../components/Button';
import Container from '../../components/Container';
import './styles.css';

const Details = () => {
  const [dragon, setDragon] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await getDragonDetails(id);

        setDragon(response);
      } catch (err) {
        history.push('/error');
      }
    })();
  }, [history, id]);

  const formatDate = date => {
    if (date) return new Date(date).toLocaleDateString();
  };

  return (
    <>
      <SubHeader />
      <Container>
        <h1 className="details-title">Detalhes</h1>
        <div className="register-info-group">
          <h4>Nome</h4>
          <span>{dragon.name}</span>
        </div>
        <div className="register-info-group">
          <h4>Tipo</h4>
          <span>{dragon.type}</span>
        </div>
        <div className="register-info-group">
          <h4>Data de Criação</h4>
          <span>{formatDate(dragon.createdAt)}</span>
        </div>
        <Button title="Voltar" onClickCallback={() => history.goBack()} />
      </Container>
    </>
  );
};

export default Details;
