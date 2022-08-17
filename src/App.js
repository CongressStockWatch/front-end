import Footer from './components/footer';
import Graph from './components/graph';
import Table from './components/table';
import List from './components/repsList';
import Login from './components/loginForm'
import { When } from 'react-if';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/auth';


function App() {
  const { LoggedIn, logout, user } = useContext(AuthContext);
  console.log(user);


  return (
    <BrowserRouter>
      <When condition={LoggedIn}>
        <Link default to="/" style={{ margin: '25px' }}>Home</Link>
        <Link to="/profile">Trading</Link>
        <button style={{ margin: '25px' }} onClick={logout}>Log Out</button>
      </When>
      <When condition={!LoggedIn}>
        <Login />
      </When>
      <When condition={LoggedIn}>

        <Routes>
          <Route path="/" element={
            <Footer />
          } />
          <Route path="/profile" element={
            <>
              <Graph />
              <Table />
              <List />
            </>
          } />
        </Routes>
      </When>
    </BrowserRouter>
  );
}



export default App;
