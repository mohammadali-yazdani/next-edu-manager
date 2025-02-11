"use client";
import { Ellipsis } from "lucide-react";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];
const PerformanceChart = () => {
  return (
    <div className="relative bg-white rounded-md w-full h-80 p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Ellipsis size={16} />
      </div>
      {/* CHART */}
      <div className="relative size-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              fill="#8884d8"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-300">of 10 max ETS</p>
      </div>
      <h2 className="absolute font-medium bottom-16 start-0 end-0 m-auto text-center">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default PerformanceChart;
