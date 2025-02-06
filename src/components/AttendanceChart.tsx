"use client";

import { Ellipsis } from "lucide-react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 59,
    absent: 16,
  },
  {
    name: "Tue",
    present: 50,
    absent: 25,
  },
  {
    name: "Wed",
    present: 69,
    absent: 6,
  },
  {
    name: "Thu",
    present: 45,
    absent: 30,
  },
  {
    name: "Fri",
    present: 75,
    absent: 0,
  },
];

const AttendanceChart = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Ellipsis size={20} />
      </div>
      {/* CHART */}
      <div className="relative size-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#D1D5DB" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#D1D5DB" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "48px" }}
            />
            <Bar
              dataKey="absent"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="present"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
