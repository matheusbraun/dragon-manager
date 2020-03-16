import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createDragon } from '../../services/api';
import SubHeader from '../../components/SubHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Container from '../../components/Container';
import './styles.css';

const Register = () => {
  const [dragon, setDragon] = useState({ name: '', type: '' });
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleOnChange = e => {
    const { name, value } = e.target;

    setDragon({ ...dragon, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const payload = {
        ...dragon,
        histories: [],
        createdAt: new Date(),
      };

      await createDragon(payload);

      handleGoBack();
    } catch (err) {
      history.push('/error');
    }
  };

  return (
    <>
      <SubHeader />
      <Container>
        <h1 className="register-title">Cadastrar Dragão</h1>
        <form
          onSubmit={handleSubmit}
          className="register-form"
          autoComplete="off"
        >
          <Input
            label="Nome"
            name="name"
            disabled={loading}
            handleOnChange={handleOnChange}
            value={dragon.name}
            required={true}
          />
          <Input
            label="Tipo"
            name="type"
            disabled={loading}
            handleOnChange={handleOnChange}
            value={dragon.type}
            required={true}
          />
          <div className="button-group">
            <Button type="submit" title="Salvar" />
            <Button
              title="Voltar"
              onClickCallback={handleGoBack}
              cssClass="cancel-button"
            />
          </div>
        </form>
      </Container>
    </>
  );
};

export default Register;
