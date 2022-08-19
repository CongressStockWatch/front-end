import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import {useSelector} from 'react-redux';
// import {useEffect, useDispatch } from 'react';

// import { getTrades } from "../../store/quiverApi";


// const tableStyling = {
//   padding: "0px 0px"
// };

// function createData(name) {
//   return { name };
// }

// const rows = [
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
//   createData("Nancy Pelosi"),
// ];

export default function StylishTable() {

  // let dispatch = useDispatch();
  // let repData =  useSelector(state => state.quiver.repsTrades)


  // useEffect(()=>{
  //   let getRepTrades = getTrades();
  //   console.log('get Trades useEffect');
  //   dispatch(getRepTrades);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])
  

  return (
    <div>
      {/* <TableContainer
        component={Paper}
        sx={{
          border: "4px solid rgba(0,0,0,0.2)",
          padding: 1,
          width: 300,
          height: 200,
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
        <Table
          sx={{
            tableLayout: "auto",
            width: "max-content"
            //height: "max-content"
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  ...tableStyling,
                  width: 100
                }}
              >
                Representatives
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repData.map((row) => (
              <TableRow key={row}>
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
      <br /> */}
    </div>
  );
}

