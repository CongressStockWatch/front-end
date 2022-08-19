import './Table.scss';
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';


// Generate Order Data
function createData(id, stock, date, representative, purchase_sale, amount, party) {
  return { id, stock, date, representative, purchase_sale, amount, party };
}

const rows = [
  createData(
    0,
    'AAPL',
    '16 Mar, 2019',
    'Elvis Presley',
    '173.03',
    '100',
    'R',
  ),
  createData(
    1,
    'AAPL',
    '16 Mar, 2019',
    'Elvis Presley',
    '173.03',
    '100',
    'R',
    866.99,
  ),
  createData(
    2, 
    'AAPL',
    '16 Mar, 2019',
    'Elvis Presley',
    '173.03',
    '100',
    'R', 
    100.81),
  createData(
    3,
    'AAPL',
    '16 Mar, 2019',
    'Elvis Presley',
    '173.03',
    '100',
    'R',
    654.39,
  ),
  createData(
    4,
    'AAPL',
    '16 Mar, 2019',
    'Elvis Presley',
    '173.03',
    '100',
    'R',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <Container id="tableContainer">
      <Table className='table' size="small">
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.stock}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.representative}</TableCell>
              <TableCell className='tableCell'>{row.purchase_sale}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.party}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </Container>
  );
}
