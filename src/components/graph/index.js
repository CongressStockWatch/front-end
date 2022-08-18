import './Graph.scss';
import React from "react";
import Container from '@mui/material/Container';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import { getSP500 } from "../../store/yahooApi";
import { getTrades} from "../../store/quiverApi";

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

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     // pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: -3000,
//     // pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: -2000,
//     // pv: -9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     // pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: -1890,
//     // pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     // pv: -3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     // pv: 4300,
//     amt: 2100
//   }
// ];

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

  // const [getTrades, setTrades ] = useState(getTrades());



  
  let dispatch = useDispatch();

 let yahooData = useSelector(state => state.yahoo);

 useEffect(()=>{
  let sP500 = getSP500();
  console.log('getSP500 useEffect');
  dispatch(sP500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

// let quiverData = useSelector(state => state.quiver.tradesOnDate);

useEffect(()=>{
  let getRepTrades = getTrades();
  console.log('get Trades useEffect');
  dispatch(getRepTrades);
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])



  // console.log('PROOF IN TABLE yahooData',yahooData);

  // console.log('PROOF IN TABLE quiverData',quiverData);

  return (
    <>
      <Container class="composedChart">
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
