import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts";
import { useCryptoApi } from "../../hooks/useCryptoApi";

const FirstGraph = () => {
  const { crypto, currency } = useCryptoApi();
//   console.log(crypto);
  console.log(currency);
  return (
    <div className="abc">
      {/* <LineChart
        width={800}
        height={300}
        data={crypto}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="code" angle={76} />
        <YAxis dataKey="rate"/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="volume"
          stroke="#8884d8"
          strokeDasharray="5 5"
        />
        <Line
          type="bump"
          dataKey="rate"
          stroke="#82ca9d"
          strokeDasharray="5 5"
        />
      </LineChart> */}

      <ResponsiveContainer width="60%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={crypto}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="code" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="cap"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="rate"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="volume"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={currency}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis dataKey="volume" />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="cap" barSize={20} fill="#413ea0" /> */}
          <Line type="monotone" dataKey="volume" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FirstGraph;
