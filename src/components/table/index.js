import './Table.scss';
import * as React from 'react';
// import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableContainer from "@mui/material/TableContainer";
// import {useSelector} from 'react-redux';



// Generate Order Data
// function createData(id, stock, date, representative, purchase_sale, amount, party) {
//   return { id, stock, date, representative, purchase_sale, amount, party };
// }

// const rows = [
//   createData(
//     0,
//     'AAPL',
//     '16 Mar, 2019',
//     'Elvis Presley',
//     '173.03',
//     '100',
//     'R',
//   ),
//   createData(
//     1,
//     'AAPL',
//     '16 Mar, 2019',
//     'Elvis Presley',
//     '173.03',
//     '100',
//     'R',
//     866.99,
//   ),
//   createData(
//     2, 
//     'AAPL',
//     '16 Mar, 2019',
//     'Elvis Presley',
//     '173.03',
//     '100',
//     'R', 
//     100.81),
//   createData(
//     3,
//     'AAPL',
//     '16 Mar, 2019',
//     'Elvis Presley',
//     '173.03',
//     '100',
//     'R',
//     654.39,
//   ),
//   createData(
//     4,
//     'AAPL',
//     '16 Mar, 2019',
//     'Elvis Presley',
//     '173.03',
//     '100',
//     'R',
//     212.79,
//   ),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Orders() {


  
  // let quiverData = useSelector(state => state.quiver.congressTrades)


  // console.log('HERE',quiverData.slice(0,50));
  // let repTradeData = quiverData.slice(0,50);
  // useEffect(()=>{
  //   let getRepTrades = getTrades();
  //   console.log('get Trades useEffect');
  //   dispatch(getRepTrades);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])


  return (
    <>
    </>
    // <TableContainer id="tableContainer" 
    // sx={{
    //   border: "4px solid rgba(0,0,0,0.2)",
    //   padding: 1,
    //   width: "max-content",
    //   height: 500,
    //   "&::-webkit-scrollbar": {
    //     width: 20
    //   },
    //   "&::-webkit-scrollbar-track": {
    //     backgroundColor: "white"
    //   },
    //   "&::-webkit-scrollbar-thumb": {
    //     backgroundColor: "black",
    //     borderRadius: 2
    //   },
    //   overflowX: "hidden"
    // }}>
    //   <Table id="table" size="small">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Stock</TableCell>
    //         <TableCell>Date</TableCell>
    //         <TableCell>Representative</TableCell>
    //         <TableCell>Purchase/Sale</TableCell>
    //         <TableCell>Amount</TableCell>
    //         <TableCell>Party</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {repTradeData.map((row,idx) => (
    //         <TableRow key={idx}>
    //           <TableCell>{row.Ticker}</TableCell>
    //           <TableCell>{row.ReportData}</TableCell>
    //           <TableCell>{row.Representative}</TableCell>
    //           <TableCell>{row.Transaction}</TableCell>
    //           <TableCell>{row.Range}</TableCell>
    //           <TableCell>{row.House}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
    //     See more orders
    //   </Link>
    // </TableContainer>
  );
}
