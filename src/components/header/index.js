import './Header.scss';
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, ImageList, ImageListItem } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Header() {

  function appBarLabel(label) {
    return (
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      text: {
        primary: "#FFFFFF"
      }
    },
  });


  const { logout } = useContext(AuthContext);
  return (
    <>
      <Stack className='stack'> 
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary">
            {appBarLabel(
              <>
                <Container className='header'>
                  <ImageList>
                    <ImageListItem className='logo'>
                      <img
                        src="../../assets/logo.png"
                        alt="congress stock watch logo"
                      />
                    </ImageListItem>
                  </ImageList>
                  <Button href="/">Home</Button>
                  <Button href="/profile">Trading</Button>
                  <Button style={{ margin: '5px' }} onClick={logout}>Log Out</Button>
                </Container>
              </>
            )}
          </AppBar>
        </ThemeProvider>
      </Stack>
    </>
  )
}
