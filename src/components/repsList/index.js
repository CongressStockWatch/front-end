import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles' 

function createData(name) {
  return { name };
}

const rows = [
  createData("Nancy Pelosi"),
  createData("Linsey Graham"),
  createData("Chuck Schumer"),
  createData("Lauren Boebert"),
  createData("Alexandria Ocasio Cortez"),
  createData("Rand Paul"),
  createData("Thomas Massie"),
  createData("Mitch McConnell"),
  createData("Michael Bennet"),
  createData("John Hickenlooper"),
  createData("Marjorie Taylor Greene"),
  createData("Nancy Pelosi"),
  createData("Linsey Graham"),
  createData("Chuck Schumer"),
  createData("Lauren Boebert"),
  createData("Alexandria Ocasio Cortez"),
  createData("Rand Paul"),
  createData("Thomas Massie"),
  createData("Mitch McConnell"),
  createData("Michael Bennet"),
  createData("John Hickenlooper"),
  createData("Marjorie Taylor Greene"),
];

const darkTheme = createTheme({ palette: {mode: 'dark'}});

export default function StylishTable() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <TableContainer
        component={Paper}
        sx={{
          border: "4px solid rgba(0,0,0,0.2)",
          padding: 1,
          width: 400,
          height: 400,
          "&::-webkit-scrollbar": {
            width: 20
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "white"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "black",
            borderRadius: 2
          },
          overflowX: "hidden"
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Representatives
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      </ThemeProvider>
    </div>
  );
}

