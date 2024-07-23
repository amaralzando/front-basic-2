"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const data = [
    {
      name: "Jan",
      total: 4152,
    },
    {
      name: "Feb",
      total: 5924,
    },
    {
      name: "Mar",
      total: 2251,
    },
    {
      name: "Apr",
      total: 5105,
    },
    {
      name: "May",
      total: 3864,
    },
    {
      name: "Jun",
      total: 5555,
    },
    {
      name: "Jul",
      total: 4270,
    },
    {
      name: "Aug",
      total: 4762,
    },
    {
      name: "Sep",
      total: 5306,
    },
    {
      name: "Oct",
      total: 2498,
    },
    {
      name: "Nov",
      total: 3292,
    },
    {
      name: "Dec",
      total: 1735,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
