import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Representative</TableCell>
            <TableCell>Purchase/Sale</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Party</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.representative}</TableCell>
              <TableCell>{row.purchase_sale}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.party}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
