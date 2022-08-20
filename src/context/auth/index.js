import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

function Auth({ children }) {

  const [LoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {

    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {

    const config = {
      baseURL: 'https://congresswatch.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: {
        username,
        password,
      }
    }

    const response = await axios(config);
    const { token } = response.data
    if (token) {
      try {
        _validateToken(token);
      } catch (e) {
        setError('Wrong username and Password Combination');
        console.error(error);
      }
    }
  }

  function _validateToken(token) {
    try {
      let validUser = jwt_decode(token);
      if (validUser) {
        setUser(validUser);
        setLoggedIn(true);
        cookie.save('auth', token)
      }
    } catch (e) {
      setLoggedIn(false);
      setError(e)
    }
  }

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }

  useEffect(() => {

    let token = cookie.load('auth');

    if (token) {
      _validateToken(token);
    }
  }, []);

  const values = {
    LoggedIn,
    user,
    error,
    can,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )

}

export default Auth
