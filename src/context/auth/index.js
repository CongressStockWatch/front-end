import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

function Auth({children}) {

  const [LoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);


  console.log(LoggedIn);
  const can = (capability) => {
    // note the shorthand
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {

    // const basicEncoding = base64.encode(`${username}:${password}`);
    const config = {
      baseURL: 'https://congresswatch.herokuapp.com',
      url: '/signin',
      method: 'post',
      // headers: {
      //   'Authorization': `Basic ${basicEncoding}`
      // },
      auth: {
        username,
        password,
      }
    }

    const response = await axios(config);
    const { token } = response.data
    console.log(response);
    if (token){
      try {
       _validateToken(token);
      } catch (e){
        setError('Wrong username and Password Combination');
        console.error(error);
      }
    }
  }

  console.log(error);


  function _validateToken(token){
    try {
      let validUser = jwt_decode(token);
      if(validUser){
        setUser(validUser);
        setLoggedIn(true);
        cookie.save('auth', token)
      }
    } catch(e){
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

    // missing:  after loading cookies how do we validate - and log back in?
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