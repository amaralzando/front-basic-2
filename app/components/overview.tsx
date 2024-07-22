"use client";

import { api } from "@/src/services/api";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const [data, setData] = useState();

  useEffect(() => {
    handleDataChart();
  }, []);

  function handleDataChart() {
    api
      .get("/overview")
      .then((response) => {
        console.log(response);
        setData(response.data); // Extract data from the response object
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error("Error fetching data:", error);
        // Consider setting an error state or showing a user-friendly message
      });
  }

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
