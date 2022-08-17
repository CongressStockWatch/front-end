import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
      text:{
        primary: "#FFFFFF"
      }
    },
  });


  const {logout } = useContext(AuthContext);
  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary">
            {appBarLabel(
              <>
                <Button href="/">Home</Button>
                <Button href="/profile">Trading</Button>
                <Button style={{ margin: '25px' }} onClick={logout}>Log Out</Button>
              </>
            )}
          </AppBar>
        </ThemeProvider>
      </Stack>
    </>
  )
}
