import './Graph.scss';
import React from "react";
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ComposedChart
} from "recharts";

const dataTwo = [
  {
    name: "Page A",
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    pv: -9800,
    amt: 2290
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    pv: -3800,
    amt: 2500
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100
  }
];

export default function App() {

  let yahooData = useSelector(state => state.yahoo.list);

  return (
    <>
      <Container data-testid="container" dataclassName="composedChart">
        <ComposedChart
          width={1000}
          height={300}
          data={yahooData}
          dataTwo={dataTwo}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} stroke="beige"/>
          <YAxis yAxisId="left" orientation="left" stroke="beige" />
          <YAxis yAxisId="right" orientation="right" stroke="beige" />
          <Tooltip />
          <Legend />
          <Line data={yahooData} yAxisId="right" type="monotone" dataKey="close" stroke="green" />
          <Bar data={dataTwo} yAxisId="left" dataKey="pv" fill="beige" />
        </ComposedChart>
      </Container>
    </>
  );
}
