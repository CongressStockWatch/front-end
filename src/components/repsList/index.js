import React from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from '@mui/material/styles' 
import { getTrades } from "../../store/quiverApi";


const tableStyling = {
  padding: "0px 0px"
};

const darkTheme = createTheme({ palette: {mode: 'dark'}});

export default function StylishTable() {
  let [render, setRender] = useState(false);
  let dispatch = useDispatch();
  let repData = useSelector(state => state.quiver.list.repsTrades) || [];
  
  console.log('repData: ', repData);


  useEffect(() => {
    dispatch(getTrades());
    setRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>

      <ThemeProvider theme={darkTheme}>
      {render && <TableContainer data-testid="table-container" 
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
            {repData.map((row, idx) => (
              <TableRow key={`repList-${idx}`}>
                <TableCell
                  sx={{
                    ...tableStyling
                  }}
                >
                  {row.representative}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
}
      </ThemeProvider>
    </div>
  );
}

