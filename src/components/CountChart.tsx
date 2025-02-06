"use client";

import { Ellipsis } from "lucide-react";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Girls",
    count: 4500,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 5500,
    fill: "#C3EBFA",
  },
];

const totalStudents = data.reduce((acc, curr) => acc + curr.count, 0);

const boysData = data.find((item) => item.name === "Boys") || { count: 0 };
const girlsData = data.find((item) => item.name === "Girls") || { count: 0 };

const boysPercentage = ((boysData.count / totalStudents) * 100).toFixed(1);
const girlsPercentage = ((girlsData.count / totalStudents) * 100).toFixed(1);

const chartData = [
  {
    name: "Total",
    count: totalStudents,
    fill: "white",
  },

  ...data,
];

const CountChart = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis size={20} />
      </div>
      {/* CHART */}
      <div className="relative size-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={chartData}
          >
            <RadialBar background dataKey="count" max={10000} />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/male-female.png"
          alt=""
          width={50}
          height={50}
          className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="size-5 bg-eduSky rounded-full" />
          <h1 className="font-bold">
            {boysData.count.toLocaleString("en-US")}
          </h1>
          <h2 className="text-xs text-gray-300">Boys ({boysPercentage}%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="size-5 bg-eduYellow rounded-full" />
          <h1 className="font-bold">
            {girlsData.count.toLocaleString("en-US")}
          </h1>
          <h2 className="text-xs text-gray-300">Girls ({girlsPercentage}%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
