import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const labels = [
    "Flat",
    "WebProgramming",
    "Statistics",
    "ComputerNetworks",
    "DataStructures",
    "Honors",
    "UHV",
  ];
  const options = {
    responsive: true,
    tension: 0.3,
    plugins: {
      tooltip: {
        backgroundColor: "#000",
        yAlign: "bottom",
        mode: "x",
        padding: 15,
      },
      legend: {
        position: "top",
        labels: {
          font: {
            family: "IBM Plex Sans",
            size: 15,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        position: "top",
        text: "Academic Performance",
        align: "start",
        font: {
          family: "IBM Plex Sans",
          size: 20,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "TermTest-1",
        data: [12, 23.5, 16, 16, 18, 13, 16],
        borderColor: "rgb(78, 54, 226)",
        backgroundColor: "rgba(78, 54, 226, 0.5)",
      },
      {
        label: "TermTest-2",
        data: [15, 25, 17.5, 19, 13, 9, 13],
        borderColor: "rgb(26, 206, 133)",
        backgroundColor: "rgba(26, 206, 133, 0.5)",
      },
      {
        label: "Risk",
        data: [13,13 ,13 ,13 , 13,13 ,13 ],
        borderColor: "red",
        backgroundColor: "rgba(254, 67, 78, 0.5)",
      },
    ],
  };
  return (
    <Line
      options={options}
      data={data}
      style={{ maxHeight: "270px", padding: "2px 15px" }}
    />
  );
}
