import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/user';
import { logIn } from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Container from '../../components/Container';

import './styles.css';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { authenticated, setUserAuthenticated } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (authenticated) history.replace('/');
  }, [authenticated, history]);

  const handleOnChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);

      await logIn(user);

      setUserAuthenticated(true);

      history.push('/');
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="login-form-title">Acessar o sistema</h1>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Usuário"
          name="username"
          disabled={loading}
          handleOnChange={handleOnChange}
          value={user.username}
          required={true}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          disabled={loading}
          handleOnChange={handleOnChange}
          value={user.password}
          required={true}
        />
        {error && <span className="error-message">{error}</span>}
        <Button type="submit" disabled={loading} title="Entrar" />
      </form>
    </Container>
  );
};

export default Login;
