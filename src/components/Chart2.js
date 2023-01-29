import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart2() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'   ];
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
    };
    const data = {
      labels,
      datasets: [
        {
            label: 'Flat',
            data: [8 , 3 , 5 ,8 , 3 , 5] ,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'CN',
            data: [8 , 3 , 5,6,5,10] ,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'DAA',
            data: [9 , 10 , 8,7,4,8] ,
            borderColor: 'rgb(106, 23, 99)',
            backgroundColor: 'rgba(202, 81, 100, 0.5)',
          },
          {
            label: 'WP',
            data: [2 , 10 , 8,5,8,9] ,
            borderColor: 'rgb(153, 100, 35)',
            backgroundColor: 'rgba(253, 62, 90, 0.5)',
          },
          {
            label: 'PS',
            data: [1 , 10 , 10,8,5,2] ,
            borderColor: 'rgb(89, 132, 99)',
            backgroundColor: 'rgba(79, 25, 200, 0.5)',
          },
          {
            label: 'THRESHOLD',
            data: [3 , 3 , 3,3,3,3] ,
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(179, 125, 20, 0.5)',
          }
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













// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top'
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [8 , 3 , 5] ,
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [6,5,10] ,
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// // };

// export function Chart2() {
//   return <Line options={options} data={data} />;
// }
