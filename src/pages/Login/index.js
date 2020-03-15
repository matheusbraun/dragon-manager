import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/user';
import { logIn } from '../../services/api';

import './styles.css';

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setUserAuthenticated } = useContext(UserContext);
  const history = useHistory();

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="user"
          disabled={loading}
          onChange={handleOnChange}
          required
        />
        <input
          name="password"
          type="password"
          disabled={loading}
          onChange={handleOnChange}
          required
        />
        {error && <span>{error}</span>}
        <button disabled={loading}>Login</button>
      </form>
    </>
  );
};

export default Login;
