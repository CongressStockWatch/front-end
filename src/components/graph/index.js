import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'



//  THIS DATA IS HARDCODED TO GET LAYOUT OF WEBPAGE DOWN 
//  WE SHOULD BE GETTING THIS DATA DIRECTLY
const data = [
  { date: '7/29/2022', close: 4118.6298828125 },
  { date: '7/22/2022', close: 4130.2900390625 },
  { date: '7/15/2022', close: 3961.6298828125 },
  { date: '7/8/2022', close: 3863.159912109375 },
  { date: '7/1/2022', close: 3899.3798828125 },
  { date: '6/24/2022', close: 3825.330078125 },
  { date: '6/17/2022', close: 3911.739990234375 },
  { date: '6/10/2022', close: 3674.840087890625 },
  { date: '6/3/2022', close: 3900.860107421875 },
  { date: '5/27/2022', close: 4108.5400390625 },
  { date: '5/20/2022', close: 4158.240234375 },
  { date: '5/13/2022', close: 3901.360107421875 },
  { date: '5/6/2022', close: 4023.889892578125 },
  { date: '4/29/2022', close: 4123.33984375 },
  { date: '4/22/2022', close: 4131.93017578125 },
  { date: '4/15/2022', close: 4271.77978515625 },
  { date: '4/8/2022', close: 4392.58984375 },
  { date: '4/1/2022', close: 4488.27978515625 },
  { date: '3/25/2022', close: 4545.85986328125 },
  { date: '3/18/2022', close: 4543.06005859375 },
  { date: '3/11/2022', close: 4463.1201171875 },
  { date: '3/4/2022', close: 4204.31005859375 },
  { date: '2/25/2022', close: 4328.8701171875 },
  { date: '2/18/2022', close: 4384.64990234375 },
  { date: '2/11/2022', close: 4348.8701171875 },
  { date: '2/4/2022', close: 4418.64013671875 },
  { date: '1/28/2022', close: 4500.52978515625 },
  { date: '1/21/2022', close: 4431.85009765625 },
  { date: '1/14/2022', close: 4397.93994140625 },
  { date: '1/7/2022', close: 4662.85009765625 },
  { date: '12/31/2021', close: 4677.02978515625 }
]

let reversedData = [];

let n = data.length - 1;

for(let i =0; i<data.length;i++){
  reversedData.push(data[n]);
  n--;
}




export default function Graph() {
  return (
    <div width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={reversedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="close"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* THIS BELOW WILL BE THE CLICKED REPRESENTATIVE */}
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
  )
}
