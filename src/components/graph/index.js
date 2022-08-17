import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Line,
  LineChart,
  ComposedChart
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    // pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: -3000,
    // pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: -2000,
    // pv: -9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    // pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: -1890,
    // pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    // pv: -3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    // pv: 4300,
    amt: 2100
  }
];

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
  return (
    <ComposedChart
      width={1000}
      height={300}
      data={data}
      dataTwo={dataTwo}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" allowDuplicatedCategory={false}/>
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Line data={data} yAxisId="right" type="monotone" dataKey="uv" stroke="#ff7300" />
      <Bar data={dataTwo} yAxisId="left" dataKey="pv" fill="#8884d8" />
    </ComposedChart>
  );
}
