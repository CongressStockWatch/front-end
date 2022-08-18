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
  const { LoggedIn, user } = useContext(AuthContext);
  console.log(user);


  return (
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
              <Header />
              <Container display='flex' flex='1' justifyContent='space-around' sx={{ height: '100vh' }} maxWidth="sm">
                <Box alignContent={"center"}>
                  <Graph />
                </Box>
                <Box>
                  <List />
                </Box>
                <Box>
                  <Table />
                </Box>
              </Container>
            </>
          } />
        </Routes>
      </When>
    </BrowserRouter>
  );
}



export default App;
