import './App.scss';
import Footer from './components/footer';
import Graph from './components/graph';
import Table from './components/table';
import List from './components/repsList';
import Login from './components/loginForm'
import { When } from 'react-if';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/auth';
import Header from './components/header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  const { LoggedIn } = useContext(AuthContext);
  return (
    <Container id="browserRouter">
      <BrowserRouter>
        <When condition={!LoggedIn}>
          <Login />
        </When>
        <When condition={LoggedIn}>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Footer />
              </>
            } />
            <Route path="/profile" element={
              <>
                <Header id="header" />
                <Graph class="graph" />
                <Box>
                  <List id="list" />
                </Box>
                <Box>
                  <Table id="table" />
                </Box>
              </>
            } />
          </Routes>
        </When>
      </BrowserRouter>
    </Container>
  );
}

export default App;
