import './App.scss';

import { getSP500 } from './store/yahooApi';
import { useDispatch } from 'react-redux';
import Footer from './components/footer';
import Graph from './components/graph';
import Table from './components/table';
import List from './components/repsList';
import Login from './components/loginForm'
import { When } from 'react-if';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/auth';
import Header from './components/header';
import Container from '@mui/material/Container';


function App() {

  const { LoggedIn } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSP500());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container id="browserRouter">
      <BrowserRouter>
        <When condition={!LoggedIn}>
          <Login data-testid="Login" />
        </When>
        <When condition={LoggedIn}>
          <Routes>
            <Route path="/" element={
              <>
                <Header data-testid="Header"/>
                <Footer data-testid="Footer" />
              </>
            } />
            <Route path="/profile" element={
              <>
                <Header id="header" />
                <Graph data-testid="Graph" class="graph" />
                {/* <Box> */}
                <List data-testid="List" id="list" />
                {/* </Box> */}
                {/* <Box> */}
                  <Table data-testid="Table" id="table" />
                {/* </Box> */}
              </>
            } />
          </Routes>
        </When>
      </BrowserRouter>
    </Container>
  );
}

export default App;
