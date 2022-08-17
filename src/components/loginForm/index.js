import React from 'react'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import useForm from '../../hooks/index';
import Button from '@mui/material/Button';

export default function Login() {


  const [defaultValues] = useState({})
  const { login } = useContext(AuthContext);
  const { handleChange, handleSubmit } = useForm(loginUser, defaultValues);
  function loginUser({ username, password }) {
    login(username, password)
  }



  return (
    <div class="page">
      <box class="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <label>
            <span>Username</span>
            <input data-testid="username" onChange={handleChange} required name="username" type="text" />
          </label>

          <label>
            <span>Password</span>
            <input data-testid="password" onChange={handleChange} required name="password" type="text" />
          </label>

          <label>
            <Button data-testid="login" type="submit">Log In</Button>
          </label>
          <label>
            <Button data-testid="login" type="submit">Signup</Button>
          </label>
        </form>
      </box>
    </div>
  )
}