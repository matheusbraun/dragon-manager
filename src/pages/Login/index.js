import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/user';
import { logIn } from '../../services/api';

import './styles.css';

const Login = () => {
  const [user, setUser] = useState({});
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
    <div className="login-form-container">
      <h1 className="login-form-title">Acessar o Sistema</h1>
      <form className="login-form" onSubmit={handleSubmit} autocomplete="off">
        <div className="input-block">
          <label htmlFor="username">Usuário</label>
          <input
            id="username"
            name="username"
            disabled={loading}
            onChange={handleOnChange}
            value={user.username}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            disabled={loading}
            onChange={handleOnChange}
            value={user.password}
            required
          />
        </div>
        {error && <span className="error-message">{error}</span>}
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
