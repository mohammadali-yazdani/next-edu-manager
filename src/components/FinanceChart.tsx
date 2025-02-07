"use client";

import { Ellipsis } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "Jan", income: 5000, expense: 3200 },
  { name: "Feb", income: 6200, expense: 4100 },
  { name: "Mar", income: 7000, expense: 4500 },
  { name: "Apr", income: 6800, expense: 4300 },
  { name: "May", income: 7200, expense: 4900 },
  { name: "Jun", income: 7500, expense: 5200 },
  { name: "Jul", income: 7800, expense: 5400 },
  { name: "Aug", income: 8100, expense: 5600 },
  { name: "Sep", income: 7400, expense: 5000 },
  { name: "Oct", income: 6900, expense: 4700 },
  { name: "Nov", income: 6600, expense: 4500 },
  { name: "Dec", income: 7100, expense: 4800 },
];

const FinanceChart = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Ellipsis size={20} />
      </div>
      {/* CHART */}
      <div className="relative size-full">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#D1D5DB" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#D1D5DB" }}
              tickLine={false}
              tickMargin={20}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#C3EBFA"
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#CFCEFF"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
