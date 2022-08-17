import React,{useContext} from 'react'
import {Link} from 'react-router-dom'; 
import { AuthContext } from '../../context/auth';

export default function Header() {
  
  const { LoggedIn, login, logout } = useContext(AuthContext);
  return (
    <>
    <Link default to="/" style={{ margin: '25px' }}>Home</Link>
    <Link to="/profile">Trading</Link>
    <button style={{ margin: '25px' }} onClick={logout}>Log Out</button>
    </>
  )
}
