import './Table.scss';
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";
import { useSelector} from 'react-redux';



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {



  let quiverData = useSelector(state => state.quiver.list.congressTrades);


  console.log('HERE', quiverData.slice(0, 50));
  let repTradeData = quiverData.slice(0, 50);

  return (
    <TableContainer id="tableContainer"
      sx={{
        border: "4px solid rgba(0,0,0,0.2)",
        padding: 1,
        width: "max-content",
        height: 500,
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
      }}>
      <Table id="table" size="small">
        <TableHead>
          <TableRow className='heading'>
            <TableCell className='heading'>Stock</TableCell>
            <TableCell className='heading'>Date</TableCell>
            <TableCell className='heading'>Representative</TableCell>
            <TableCell className='heading'>Purchase/Sale</TableCell>
            <TableCell className='heading'>Amount</TableCell>
            <TableCell className='heading'>Party</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repTradeData.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.Ticker}</TableCell>
              <TableCell>{row.ReportData}</TableCell>
              <TableCell>{row.Representative}</TableCell>
              <TableCell>{row.Transaction}</TableCell>
              <TableCell>{row.Range}</TableCell>
              <TableCell>{row.House}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </TableContainer>
  );
}
